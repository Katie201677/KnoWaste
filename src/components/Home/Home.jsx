import React from "react"
import NavBar from "../NavBar";
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import Fork from '../../assets/images/fork.png';
import Logo from '../../assets/images/Logo.png';
import Table from '../../assets/images/leagueTable.png';


const Home = () => {
  return (
    <div className={styles.fullPage}>
       {/* <div className={styles.timer}>
        <h4>timer goes here</h4>
      </div> */}

      {/* <div className={styles.topBar}>
        <h4>Well done! less than 10% waste last week!</h4>
      </div> */}

      {/* <div className={styles.picture}>
        <img src={picture}></img>
      </div> */}

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
          <div className={styles.aboutUs}>
            <img src={Logo} className={styles.leagueTable}></img>
            <h3 className="text-white">Your Impact</h3>
            <p className="text-white">Well done! 10% waste less than last week.</p>
          </div>
          <div className={styles.gamification}>
            <img src={Table} className={styles.leagueTable}></img>
            <h3 className="text-white">League Tables</h3>       
            <p className="text-white">Your hall is number #1 in the KnoWaste league.</p>   

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
