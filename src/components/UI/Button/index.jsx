import React from 'react';

//Styles
import "./Button.scss";

export const Button = ({ children, disabled, ...props }) => {
  return (
    <button className={`button ${disabled ? "disabled" : ""}`} disabled={disabled} {...props}>
        {children}
    </button>
  );
}
