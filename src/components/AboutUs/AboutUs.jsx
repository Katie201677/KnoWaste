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
      <div className={styles.aboutUs}>

        <div>
          <img src={Logo} className={styles.logo} />
        </div>

        <span className={styles.divider}></span>

        <div>
          <h1>Who are we?</h1>
          <h2>We are Knowaste</h2>
          <p className={styles.textwhite} >
            Etiam mattis risus sed risus ultrices, id euismod orci ornare. Donec nec urna a sem ultricies elementum. Vestibulum id quam tellus. Pellentesque vestibulum laoreet est at finibus. 
            Sed vel mauris felis. Vivamus suscipit, massa quis posuere suscipit, enim ligula efficitur lectus, vitae cursus nisi erat ut nibh. Donec accumsan cursus neque.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
