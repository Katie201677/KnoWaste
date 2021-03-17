import React from "react";
import NavBar from "../../NavBar";
import styles from "./AdminHome.module.scss";
import { Link } from "react-router-dom";
import Fork from "../../../assets/images/fork.png";
import Logo from "../../../assets/images/Logo.png";
import Table from "../../../assets/images/leagueTable.png";

const adminHome = () => {
  return (
    <div className={styles.content}>
      <div className={styles.linkContainer}>
        
        <Link to="/adminmealinput">

          <div className={styles.linkContainerOne}>

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
        <div className={styles.weekPlanner}>
          <Link to="/adminweeklyplanner">
            <div className={styles.aboutUs}>
              <img src={Logo} className={styles.leagueTable}></img>
              <h3 className="text-white">Week Planner</h3>
              <p className="text-white">Plan meals for next week</p>
            </div>
          </Link>
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default adminHome;
