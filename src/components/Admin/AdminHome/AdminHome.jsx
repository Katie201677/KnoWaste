import React, {useContext} from "react";
import AdminNavBar from "../AdminNavBar";
import styles from "./AdminHome.module.scss";
import { Link, useHistory } from "react-router-dom";
import Fork from "../../../assets/images/fork.png";
import Logo from "../../../assets/images/Logo.png";
import Table from "../../../assets/images/leagueTable.png";
import { UserContext } from "../../../context/contextUser";

const adminHome = () => {
  const {user} = useContext(UserContext);
  let history = useHistory();
  if(!user.isAdmin) {
    history.push("/home");
  }
  return (
   
    <div className={styles.contentMain}>

      
      <div className={styles.linkContainer}>
        
       

          <div className={`box-style-1 ${styles.boxContainer}`}>

            <div className={styles.mealSelection}>
              <div>
                <h2 className="textwhite">Upload a Meal</h2>
                <div>
                <img src={Fork} className={styles.fork}></img>
              </div>
                <Link to="/adminmealinput">
                  <button className="button-style-1">
                    Add Meal
                  </button>
                </Link>
              </div>
             
            </div>
          </div>
        <div className={`box-style-1 ${styles.boxContainer}`}>
          
            <div className={styles.mealSelection}>
              
              <h2 className="textwhite">Week Planner</h2>
              <div>
                <img src={Logo} className={styles.leagueTable}></img>
              </div>
              <Link to="/adminweeklyplanner">
                  <button className="button-style-1">
                    Plan Meals
                  </button>
                </Link>
            </div>
         
        </div>
        <div className={"box-style-1"}>
            <div>
              <h3 className="textwhite">Weeks Orders Summary</h3>
            </div>
            <Link to="/recentorders">
                  <button className="button-style-1">
                    View Orders
                  </button>
                </Link>
        </div>
      </div>

     
    </div>
  );
};

export default adminHome;
