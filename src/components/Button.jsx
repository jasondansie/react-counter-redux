import React from 'react';
import classes from './Buttons.module.css'

const Button = ({ onClick, buttonId, buttonText }) => {
    return (
        <div>
            <button className={classes.button} onClick={onClick} id={buttonId}>{buttonText}</button>
        </div>
    );
};

export default Button;