import React from "react";
import AdminNavBar from "../AdminNavBar";
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

          <div className={"box-style-1"}>

            <div className={"styles.mealSelection"}>
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
        <div className={"box-style-1"}>
          <Link to="/adminweeklyplanner">
            <div>
              <img src={Logo} className={styles.leagueTable}></img>
              <h3 className="text-white">Week Planner</h3>
              <p className="text-white">Plan meals for next week</p>
            </div>
          </Link>
        </div>
        <div className={"box-style-1"}>
          <Link to="/recentorders">
            <div>
              <h3 className="text-white">Weeks Orders Summary</h3>
              <p className="text-white">View and Print all orders for the next week</p>
            </div>
          </Link>
        </div>
      </div>

      <AdminNavBar />
    </div>
  );
};

export default adminHome;
