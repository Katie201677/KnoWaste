import React from "react";
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
        <button className={styles.btn} id="profile"><a>1</a></button>
        <button className={styles.btn} id="leaderboard"><a>2</a></button>
        <button className={styles.btn} id="home"><a>3</a></button>
        <button className={styles.btn} id="meal-selection"><a>4</a></button>
    </nav>
  );
};  

export default Navigation;
