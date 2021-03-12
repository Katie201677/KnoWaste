import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {

  const togglePassword = () => {
    setIsVisible(!isVisible)
  }
  
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.loginPage}>
        <img src="./knoWasteLogo_white.png" alt="logo" className={styles.logo} />
        <div className={styles.divider}></div>

        <form action="" className={styles.loginForm}>
          <h3>Member Login</h3>
          <label htmlFor="emailInput">Email </label>
          <input type="email" id="emailInput" required />

          <label htmlFor="passwordInput">Password </label>
          <input type={isVisible ? 'text':'password'} id="passwordInput" required />

          <span className={styles.showPass} onClick={togglePassword}>
            <FontAwesomeIcon icon={isVisible ? ["far", "eye-slash"]:["far", "eye"]} />
          </span>

          <span className={`${styles.smallText} ${styles.forgotPassword}`}>
            Forgot your password?
            <Link to="/forgotpassword"> Reset</Link>
          </span>

          {/* <span> */}
            {/* <input type="submit" value="LOG IN" id={styles.loginButton} className={styles['btn-secondary']} /> */}
            <Link to="/">
            <button type="submit" id={styles.loginButton} className={styles['btn-secondary']}>LOG IN</button>
            </Link>
            
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
