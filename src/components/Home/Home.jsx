import React from "react"
import NavBar from "../NavBar";
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div>
      {/*timer*/}
      {/*info re timer (?)*/}
      {/*improvements since last week etc*/}
      <div className={styles.topBar}><h4>Well done! less than 10% waste last week!</h4></div>
      <div className={styles.backDrop}></div>
      <div className={styles.linkContainerOne}>
        <div className={styles.mealSelectionButton}>
          <a href='./MealSelection'><h3>Meal Selection</h3>
            <img className='mealSelection'></img>
          </a>
        </div>
        </div>
        <div className={styles.linkContainerTwo}>
        <div className={styles.aboutUs}>
        <a href='./AboutUs'><h3>About Us / Environment</h3>
          <img className='aboutUs'></img>
        </a>
        </div>
        <div className={styles.gamification}>
        <a href='./Gamification'><h3>Gamification</h3>
          <img className='gamification'></img>
        </a>
        </div>
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default Home;