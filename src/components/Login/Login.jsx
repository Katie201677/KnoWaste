import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";

const Login = () => {

  const togglePassword = () => {
    setIsVisible(!isVisible)
  }
  
  const [isVisible, setIsVisible] = useState(false)

  const onSubmit = () => {
    redirectToHome()
  }

  const redirectToHome = () => {
    window.location = "/";
  }

  const emailIsUnique = async(email) => {
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    await wait(1000);
    return email === "test@example.com" ? "there is no account with that email" : undefined;
  };

  const { 
    register,
    handleSubmit,
    errors,
    formState
  } = useForm();

  return (
    <div className={styles.container}>
      <div className={styles.loginPage}>
        <img src="./knoWasteLogo_white.png" alt="logo" className={styles.logo} />
        <div className={styles.divider}></div>

        <form action="" className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <h3>Member Login</h3>
          <label htmlFor="emailInput">Email </label>
          <input 
            className={errors.email && styles.danger}
            type="text" id="emailInput"
            name="email"
            ref={register({
            required: "Email is required.",
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address"
            },
            validate: (email) => emailIsUnique(email)
          })}  />
          {errors.email && <p className={styles.inputError}>{errors.email.message}</p>}

          <label htmlFor="passwordInput">Password </label>
          <input 
            className={errors.password && styles.danger}
          type={isVisible ? 'text':'password'} id="passwordInput"
          name="password" ref={register({
              required: "Password is required."
            })} />
            {errors.password && <p className={styles.inputError}>{errors.password.message}</p>}

          <span className={styles.showPass} onClick={togglePassword}>
            <FontAwesomeIcon icon={isVisible ? ["far", "eye-slash"]:["far", "eye"]} />
          </span>

          <span className={`${styles.smallText} ${styles.forgotPassword}`}>
            Forgot your password?
            <Link to="/forgotpassword"> Reset</Link>
          </span>

          {/* <span> */}
            {/* <input type="submit" value="LOG IN" id={styles.loginButton} className={styles['btn-secondary']} /> */}
            {/* <Link to="/"> */}
            <button type="submit" id={styles.loginButton} className={styles["button-style-1"]}>LOG IN</button>
            {/* </Link> */}
            
          {/* </span> */}
          <span className={styles.smallText}>
            Don&apos;t have an account? 
            <Link to="/register"> Sign up</Link>
          </span>

        </form>
      </div>
    </div>
  );





};



export default Login;
