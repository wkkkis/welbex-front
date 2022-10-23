import React from 'react';
import { useState } from 'react';

//Styles
import "./Select.scss";

const Select = ({ children, onChange, placeholder, ...props }) => {
    const [selected, setSelected] = useState('')

    const handleChange = (event) => {
        onChange(event.target.value)
        setSelected(event.target.value);
    };

    return (
        <select className='select' value={selected} onChange={handleChange} {...props}>
            <option disabled={true} value="">
                {placeholder}
            </option>
            {children}
        </select>
    )
};

export default Select;