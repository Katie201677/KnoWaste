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
    <div className={styles.content}>
      {/*<NavBar />*/}
      <div></div>
      <div className={styles.fullPage}>
        <div className={styles.makeInline}>
         <HelpPopUp sourcePage='homepage'/>
        </div>
        <div className={styles.linkContainer} >
        
          <div className={`${styles.linkContainerOne} box-style-1`}>
            <div className={styles.mealSelection}>
            <h1 className="textwhite">Meal Selection</h1>
            <Link to="/mealselection">
                  <button className='button-style-1'>Click here to choose!</button>
            </Link>               
            <img src={Fork} className={styles.fork}></img>
                
                {/* <div className="textcenter">
                </div>
                <div>
                </div>   */}
            </div>
          </div>
          <Timer />
          <div className={styles.linkContainerTwo}>
       
              <div className={`${styles.aboutUs} box-style-1`}>
                <img src={Logo} className={styles.leagueTable}></img>
                <h3 className="textwhite">Your Impact</h3>
                <p className="textwhite">Well done! 10% waste less than last week.</p>
                <Link to="environment">
                 <button className='button-style-1'>Explore</button>
                </Link>
              </div>
          
         
              <div className={`${styles.gamification} box-style-1`}>
                <img src={Table} className={styles.leagueTable}></img>
                <h3 className="textwhite">League Tables</h3>       
                <p className="textwhite">Your hall is number #1 in the KnoWaste league.</p>
                <Link to="gamification">
                <button className='button-style-1'>View League</button>
                </Link>
            </div>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default Home;
