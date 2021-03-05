import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";

const ForgotPassword = () => {
  const [notify, setBeenNotified] = useState(false);
  const [validate, isEmailValid] = useState(false);

  const handleClick = () => {
    if (notify == true && validate == true) {
      setBeenNotified(false);
      isEmailValid(true);
    } else {
      setBeenNotified(true);
      isEmailValid(false);
      // ... or the other way around
    }
  };

  return (
    <div>
      <label for="email">Enter your email:</label>
      {notify && validate ? (
      <section class={styles.alert}>Notificaton</section>
      ) : (
        <section class = {styles.displayNone}></section>
      ) 
      }
      <button onClick={handleClick}>Submit</button>


      {/* <>
      <Notify show={notify}/>
      <button onClick={() => setBeenNotified(!notify)}>Submit</button>
      </> */}

      
    </div>
  );
};

export default ForgotPassword;
