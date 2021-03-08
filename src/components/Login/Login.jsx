import React from "react";
import styles from "./Login.module.scss";
import logo from "../../assets/logoNoText.svg";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginPage}>
        {" "}
        {/* blue and purple container */}
        {/* LOGO */}
        <img src={logo} alt="logo" className={styles.logo} />
        {/* vertical line to separate logo from fields (desktop/tablet) */}
        <form action="" className={styles.loginForm}>
          {/* email label */}
          <label for="emailInput">Email </label>
          {/* email input */}
          <input type="email" id="emailInput" />
          {/* password label */}
          <label for="passwordInput">Password </label>
          {/* password input */}
          <input type="password" id="passwordInput" />
          {/* show password button */}
          {/* forgot password link */}
          <a href="http://www.google.com">Forgot your password?</a>
          {/* login button */}
          <input type="submit" value="LOG IN" id={styles.loginButton} />
          {/* sign up hyperlink */}
          <span>
            Don't have an account? <a href="/Register"> Sign up</a> here
          </span>
        </form>
      </div>
    </div>
  );
};

//figure out image in background

export default Login;
