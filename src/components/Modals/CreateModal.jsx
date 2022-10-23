import React, { useEffect, useRef, useState } from "react";

//Hooks
import useData from "../../hooks/useData";
import { useValidator } from "../../hooks/useValidate";
import ReactPortal from "../ReactPortal";

//Components 
import SpinnerLoad from "../SpinnerLoad"
import { Button } from "../UI/Button";

//UI
import { Field } from "../UI/Field";

//Styles
import "./Modals.scss";

const CreateModal = ({handleClose, isOpen}) => {
    const { load, createData } = useData()
    const { setError, errorData: { error }, ...validator } = useValidator();

    const btnRef = useRef(null);

    const [result, setResult] = useState("")

    const [name, setName] = useState(null);
    const [date, setDate] = useState(null);
    const [count, setCount] = useState(null);
    const [distance, setDistance] = useState(null);

    useEffect(() => {
        
        return () => {
            setName(null)
            setDate(null)
            setCount(null)
            setDistance(null)
        }
    }, [])

    const updateHandler = async (e) => {
        e.preventDefault();

        if (!name && !count && !distance) {
            setError("Заполните все поля");
            return;
        } else if (!date) {
            setError("Поле дата обязательна")
            return;
        }

        const body = {
            name,
            date,
            count,
            distance
        };

        const res = await createData(body).finally(() => {
            
        })
        setResult(res?.message)
    };
    
    return isOpen ? (
        <ReactPortal>
            <div className="modal_container">
                
                <div className="modal_container__content">
                    <button className="modal_container__content__close_btn" onClick={handleClose}>&#10006;</button>
                    <form
                        className="modal_container__content__form"
                        onSubmit={(e) => updateHandler(e)}
                    >
                        <Field
                            value={date}
                            text="Введите дату"
                            type="date"
                            onChange={(e) => {
                                validator.isDateValid(e.target.value);
                                setDate(e.target.value);
                            }}
                        />
                        <Field 
                            value={name}
                            text="Введите название"
                            type="text"
                            onChange={(e) => {
                                validator.isNameValid(e.target.value);
                                setName(e.target.value);
                            }}
                        />
                        <Field
                            value={count}
                            text="Введите колличество"
                            type="number"
                            onChange={(e) => {
                                validator.isCountValid(e.target.value);
                                setCount(e.target.value);
                            }}
                        />
                        <Field 
                            value={distance}
                            text="Введите расстояние"
                            type="number"
                            onChange={(e) => {
                                validator.isDistanceValid(e.target.value);
                                setDistance(e.target.value);
                            }}
                        />
                        
                        <Button
                            ref={btnRef}
                            type="submit"
                        >
                            {load ? (
                                <SpinnerLoad />
                            ) : (
                                "Изменить"
                            )}
                        </Button>
                        {error.length ? (
                            <span className="modal_container__content__form__error">{error}</span>
                        ) : null}
                        {result.length ? (
                            <span className="modal_container__content__form__success">{result}</span>
                        ) : null}
                    </form>
                </div>
            </div>
        </ReactPortal>
    ) : (
        null
    );
}

export default CreateModal;