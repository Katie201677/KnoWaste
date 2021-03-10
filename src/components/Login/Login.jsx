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
        {" "}
        {/* blue and purple container */}
        {/* LOGO */}
        <img src="./knoWasteLogo_white.png" alt="logo" className={styles.logo} />
        {/* vertical line to separate logo from fields (desktop/tablet) */}
        <div className={styles.divider}></div>

        <form action="" className={styles.loginForm}>
          <h3>Member Login</h3>
          {/* email label */}
          <label htmlFor="emailInput">Email </label>
          {/* email input */}
          <input type="email" id="emailInput" />
          {/* password label */}
          <label htmlFor="passwordInput">Password </label>
          {/* password input */}
          <input type={isVisible ? 'text':'password'} id="passwordInput" />
          {/* show password button */}
          <span className={styles.showPass} onClick={togglePassword}>
            <FontAwesomeIcon icon={isVisible ? ["far", "eye-slash"]:["far", "eye"]} />
          </span>
          {/* forgot password link */}
          <span className={`${styles.smallText} ${styles.forgotPassword}`}>
          Forgot your password?
          {/* <a href="http://www.google.com"> Reset</a> */}
          <Link to="/forgotpassword"> Reset</Link>
          </span>
                    {/* login button */}
          {/* <span className={styles.centered}> */}
          <Link to="/" ><input type="submit" value="LOG IN" id={styles.loginButton} className={styles.centered}/></Link>
          {/* </span> */}
          {/* sign up hyperlink */}
          <span className={styles.smallText}>
            Don&apos;t have an account? 
            {/* <a href="/Register"> Sign up</a> */}
            <Link to="/register"> Sign up</Link>
          </span>
        </form>
      </div>
    </div>
  );





};



export default Login;
