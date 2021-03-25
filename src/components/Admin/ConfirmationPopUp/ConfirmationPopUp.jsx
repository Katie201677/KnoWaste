import React, { useState } from 'react'
import styles from "./ConfirmationPopUp.module.scss";

const ConfirmationPopUp = ({title, message, toggle}) => {

    const handleClick = () => {
      toggle();
    };
  
    return (
        <div className={styles.popup}>
          <span
            className={styles.popupText}>

            <h1>{title}</h1>
            <p>
             {message}
            </p>
            <button onClick={handleClick}>Okay, Thanks</button>
          </span>
        </div>
    );
};

export default ConfirmationPopUp
