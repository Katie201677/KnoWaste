import React, { useState } from "react"
import NavBar from "../NavBar";
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import Fork from '../../assets/images/fork.png';
import Logo from '../../assets/images/Logo.png';
import Table from '../../assets/images/leagueTable.png';
import Timer from '../MealSelection/Timer/Timer';
import HelpPopUp from '../HelpPopUp';

const Home = () => {

  return (
    <div className={styles.fullPage}>
      <div className={styles.makeInline}>
        <Timer />
        <HelpPopUp />
      </div>
      
      

      <div className={styles.linkContainer}>
      <Link to="/mealselection">
        <div className={styles.linkContainerOne}>
          <div className={styles.mealSelection}>
            <div>
              <h2 className="text-white">Meal Selection</h2>
                Click here to see this weeks meals
              <p className={styles.textMeal}>Tonight you are having chicken curry!</p>
            </div>
            <div>
              <img src={Fork} className={styles.fork}></img>
            </div>  
          </div>
        </div>
        </Link>
        <div className={styles.linkContainerTwo}>
          <Link to="environment">
            <div className={styles.aboutUs}>
              <img src={Logo} className={styles.leagueTable}></img>
              <h3 className="text-white">Your Impact</h3>
              <p className="text-white">Well done! 10% waste less than last week.</p>
            </div>
          </Link>
          <Link to="gamification">
            <div className={styles.gamification}>
              <img src={Table} className={styles.leagueTable}></img>
              <h3 className="text-white">League Tables</h3>       
              <p className="text-white">Your hall is number #1 in the KnoWaste league.</p>
          </div>
          </Link>
      </div>
      </div>

      <div>
        <NavBar /> 
      </div>
    </div>
  );
};

export default Home;
