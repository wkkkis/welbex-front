import React from 'react';

//Styles
import "./Field.scss";

export const Field = ({ text, onChange, value, type }) => {
  return (
    <input className='field' placeholder={text} onChange={onChange} value={value} type={type} />
  );
}
