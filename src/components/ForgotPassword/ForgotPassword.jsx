import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";

const ForgotPassword = () => {
  const [notify, setBeenNotified] = useState(false);

  const handleClick = () => {
    if (notify == true) {
      setBeenNotified(false);
      // setBeenNotified to false
    } else {
      setBeenNotified(true);
      // ... or the other way around
    }
  };

  return (
    <div>
      <label for="email">Enter your email:</label>

      {
        // ..  if statement should show the notification or hide based on whether "notify" is true/false
      }
      <button onClick={handleClick}>Submit</button>

      <section class={styles.alert}>Notificaton</section>
    </div>
  );
};

export default ForgotPassword;
