import React from "react"
import styles from './AboutUs.module.scss';
import NavBar from '../NavBar'
import Timer from '../MealSelection/Timer'
import Logo from '../../assets/Logo_white_new.png'

const AboutUs = () => {
  return (
    <div className={styles.content}>
      <Timer />
      <NavBar />
      <div className={styles.aboutus}>
        <div>
          <img src={Logo} className={styles.logo} />
        </div>
        <div className={styles.divider}></div>
        <div>
          <h1>Hello</h1>
          <h2>We are Knowaste</h2>
          <h3 className={styles.textwhite} >We are all about no waste</h3>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
