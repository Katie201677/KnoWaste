import React, { useState } from "react";
import styles from "./Login.module.scss";

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
        <form action="" className={styles.loginForm}>
          {/* email label */}
          <label for="emailInput">Email </label>
          {/* email input */}
          <input type="email" id="emailInput" />
          {/* password label */}
          <label for="passwordInput">Password </label>
          {/* password input */}
          <input type={isVisible ? 'text':'password'} id="passwordInput" />
          {/* show password button */}
          <span className={styles.showPass} onClick={togglePassword}>show</span>
          {/* forgot password link */}
          <span className={styles.smallText}>
          Forgot your password?<a href="http://www.google.com"> Reset</a>
          </span>
          {/* login button */}
          <input type="submit" value="LOG IN" id={styles.loginButton} />
          {/* sign up hyperlink */}
          <span className={styles.smallText}>
            Don't have an account? <a href="/Register"> Sign up</a>
          </span>
        </form>
      </div>
    </div>
  );





};



export default Login;
