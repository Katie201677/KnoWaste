import React from "react"
import NavBar from "../NavBar";
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className={styles.fullPage}>
       <div className={styles.timer}>
        <h4>timer goes here</h4>
      </div>

      <div className={styles.topBar}>
        <h4>Well done! less than 10% waste last week!</h4>
      </div>

      {/* <div className={styles.picture}>
        <img src={picture}></img>
      </div> */}

      <div className={styles.linkContainer}>
        <div className={styles.linkContainerOne}>
          <div className={styles.mealSelection}>
            <Link to='/mealselection' >
              <h3>Meal Selection</h3>
              <img src='../../assets/images/fork.png' className={styles.fork}></img>
              <p className={styles.textMeal}>Tonight you&apos;re having chicken curry!</p>
            </Link>
          </div>
        </div>
        <div className={styles.linkContainerTwo}>
          <div className={styles.aboutUs}>
            <Link to='/aboutus'>
            <h3>Your Impact</h3>
            <img src={logo} className={styles.logo}></img>
            </Link>
          </div>
          <div className={styles.gamification}>
            <Link to='/gamification'>
              <h3>League Tables</h3>
              <img src={leagueTable} className={styles.leagueTable}></img>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <NavBar /> 
      </div>
    </div>
  );
};

export default Home;
