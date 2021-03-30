import React, { useState } from "react"
import NavBar from "../NavBar";
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import Fork from '../../assets/images/fork.png';
import Logo from '../../assets/images/Logo.png';
import Table from '../../assets/images/leagueTable.png';
import Timer from '../Timer';
import HelpPopUp from '../HelpPopUp';

const Home = () => {

return (
<div className={styles.content}>
  
    <NavBar />
  
  <div className={styles.fullPage}>
    <div className={styles.makeInline}>
      <HelpPopUp sourcePage='homepage' />
    </div>
    <div className={styles.linkContainer}>
      <div className={`${styles.mealSelection} box-style-1`}>
        <h1 className="textwhite">Meal Selection</h1>
        
        <img src={Fork} className={styles.fork}></img>
        <Link to="/mealselection">
        <button className='button-style-1'>Click here to choose!</button>
        </Link>
      </div>
      <div className={styles.timer}>
        <Timer />
      </div>
      <div className={`${styles.aboutUs} box-style-1`}>
        <div className={styles.imageContainer}>
          <img src={Logo} className={styles.leagueTable}></img>
        </div>
        <h3 className="textwhite">Your Impact</h3>
        <p className="textwhite">Well done! 10% waste less than last week.</p>
        <Link to="environment">
        <button className='button-style-1'>Explore</button>
        </Link>
      </div>


      <div className={`${styles.gamification} box-style-1`}>
        <div className={styles.imageContainer}>
          <img src={Table} className={styles.leagueTable}></img>
        </div>
        <h3 className="textwhite">League Tables</h3>
        <p className="textwhite">Your hall is number #1 in the KnoWaste league.</p>
        <Link to="gamification">
        <button className='button-style-1'>View League</button>
        </Link>
      </div>
    </div>
  </div>

</div>
);
};

export default Home;