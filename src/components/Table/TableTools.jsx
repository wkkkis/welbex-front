import React, { useState } from 'react'

//Hooks
import useData from '../../hooks/useData';
import UpdateModal from '../Modals/UpdateModal';

//Components
import SpinnerLoad from '../SpinnerLoad';

//UI
import { Button } from '../UI/Button';

const TableTools = ({ id, ...props }) => {
    const { load, deleteData } = useData();

    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen)
    }

    return (
        <div className="tool_item">
            <Button onClick={handleClick}>
                Изменить
                {load ? <SpinnerLoad /> : null}
            </Button>
            <Button onClick={() => deleteData(id)} disabled={load}>
                Удалить
                {load ? <SpinnerLoad /> : null}
            </Button>
            <UpdateModal isOpen={isOpen} handleClose={handleClick} id={id} obj={props} />
        </div>
    )
};

export default TableTools;