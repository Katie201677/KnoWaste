import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";
import kitchenImage from '../../assets/cafe.jpg';
import logo from '../../assets/Logo_white_new.png';

const ForgotPassword = () => {
  
  const [email, setEmail] = useState("");
  const [isValid, setEmailValid] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleClick = () => {
    setHasSubmitted(true);
  };

  const emailValidation = (event) => {
    const newEmail = event.target.value;
    const re = /\S+@\S+\.\S+/;
    const isValidEmail = re.test(String(newEmail).toLowerCase()); 
    setEmailValid(isValidEmail);
  }

  return (
    <main>
        <div className={styles.forgotPasswordContainer}>
          
          <img className={styles.logo} src={logo} />
          <p>Enter your e-mail and press the button.  Then we’ll send you a link that you can use to reset your password!</p>
          
          <section className={styles.email}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="example@email.com" onBlur={emailValidation}></input>
          </section>
            
         
          <button className="button-style-1" onClick={handleClick}>Submit</button>          
        </div>

        {
            // 1. Show an invalid message once a user has clicked submit and it's STILL invalid 
            !isValid && hasSubmitted ? <section className={styles.alert}><h3>Please enter a valid email</h3></section> : null                          
        }
        {
            // 2. Show a success message if their email is valid upon submisison
            isValid && hasSubmitted ? <section className={styles.alert}><h3>Please check your emails for a password reset</h3></section> : null
        }
    </main>
  );
};

export default ForgotPassword;
