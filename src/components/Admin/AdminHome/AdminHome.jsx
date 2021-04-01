import React from "react";
import AdminNavBar from "../AdminNavBar";
import styles from "./AdminHome.module.scss";
import { Link } from "react-router-dom";
import Fork from "../../../assets/images/fork.png";
import Logo from "../../../assets/images/Logo.png";
import Table from "../../../assets/images/leagueTable.png";

const adminHome = () => {
  return (
    <div className={styles.contentMain}>
      

      <div className={styles.linkContainer}>
        
        <Link to="/adminmealinput">

          <div className={`box-style-1 ${styles.boxContainer}`}>

            <div className={styles.mealSelection}>
              <div>
                <h2 className="text-white">Upload a Meal</h2>
                <p>Add a new meal to the database</p>
              </div>
              <div>
                <img src={Fork} className={styles.fork}></img>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/adminweeklyplanner">
        <div className={`box-style-1 ${styles.boxContainer}`}>
          
            <div className={styles.mealSelection}>
              
              <h2 className="text-white">Week Planner</h2>
              <p className="text-white">Plan meals for next week</p>
              <div>
                <img src={Logo} className={styles.leagueTable}></img>
              </div>
              
            </div>
            
         
        </div>
        </Link>
      </div>

     
    </div>
  );
};

export default adminHome;
