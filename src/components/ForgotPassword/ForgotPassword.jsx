import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";

const ForgotPassword = () => {
  const [notify, setBeenNotified] = useState(false);
  const [email, setEmail] = useState("");
  const [validate, isEmailValid] = useState("");

  const handleClick = () => {
    if (notify == true && validate == true) {
      setBeenNotified(false);
      isEmailValid(true);
    } else {
      setBeenNotified(true);
      isEmailValid(false);
    }
  };

  const emailValidation = (event) => {
    const newEmail = (event.target.value);
    const re = /\S+@\S+\.\S+/;
    const isValidEmail = re.test(String(newEmail).toLowerCase());

    if(isValidEmail){   
    return alert("Please check your emails for password reset")
  } else if (!isValidEmail) {
    alert ("Please enter a valid email")
  }


  // check if the input box is a valid email, if it is a valid email then notify user displayed on page of password reset email
  // else if the email is invalid prompt "please enter a valid email"
  return (
    <div>
      <label for="email">Enter your email:</label>
      <input type="email" placeholder="example@email.com" onChange={emailValidation}></input>
      // if statement/ change of ternary 
      {notify && validate ? (
      <section className={styles.alert}>Notificaton</section>) : () 
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
