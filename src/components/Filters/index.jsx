import React, { useEffect, useRef, useState } from 'react'

//Hooks
import useData from '../../hooks/useData';

//Components
import { Button } from '../UI/Button';

//UI
import { Field } from '../UI/Field';
import Select from '../UI/Select'

//Utils
import { filtersArr, notInColumn, tableColumnArr } from '../../utils/constants';

//Styles
import "./Filters.scss"
import { useNavigate } from 'react-router';
import { routes } from '../../utils/routes';

const Filters = () => {
    const { filterData } = useData();
    const navigate = useNavigate()

    const [columnSeleced, setColumnSelected] = useState(null);
    const [filterSeleced, setFilterSelected] = useState(null);
    const [value, setValue] = useState("");
    const [type, setType] = useState("string");

    const [error, setError] = useState("");

    useEffect(() => {
        if (columnSeleced) {
            const column = JSON.parse(columnSeleced)
            setType(column.type)
        }
    }, [columnSeleced])

    const filterOnClientHandler = (e) => {
        if (!value || !filterSeleced || !columnSeleced) {
            setError("Заполните все поля");
            return;
        }

        const column = JSON.parse(columnSeleced)
        const body = {
            column: column.value,
            type: filterSeleced,
            value: type === "string" ? value : parseInt(value),
        }

        filterData(body)
    };

    const filterOnServerHandler = (e) => {
        if (!value || !filterSeleced || !columnSeleced) {
            setError("Заполните все поля");
            return;
        }

        const column = JSON.parse(columnSeleced);
    
        navigate(`${routes.SEARCH}?value=${value}&column=${column.value}&type=${filterSeleced}`);
    };
    
    return (
        <div className='filters'>
            <Select placeholder="Выберите колонку" onChange={setColumnSelected}>
                {tableColumnArr.map((item) => {
                    if (notInColumn.includes(item.key)) {
                        return null;
                    }

                    const option = {value: item.key, type: item.type}

                    return (
                        <option key={item.key} value={JSON.stringify(option)}>
                            {item.name}
                        </option>
                    )
                })}
            </Select>

            <Select placeholder="Выберите способ фильтрации" onChange={setFilterSelected}>
                {filtersArr.map((item) => (
                    <option key={item.key} value={item.key}>
                        {item.name}
                    </option>
                ))}
            </Select>

            <Field
                text="Введите значение" 
                type={type} 
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <div className='filters__btns'>
                <Button
                    onClick={filterOnClientHandler}
                    type="submit"
                >
                    Фильтровать на фронте
                </Button>
                <Button
                    onClick={filterOnServerHandler}
                    type="submit"
                >
                    Фильтровать на сервере
                </Button>
            </div>

            {error && <div className='filters__message'>
                {error}
            </div>}
        </div>
    )
}

export default Filters