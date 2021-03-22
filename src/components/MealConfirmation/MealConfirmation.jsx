import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from "../../data/fa-library.js";
import styles from "./MealConfirmation.module.scss";
import MealCard from "./MealCard";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Timer from "../MealSelection/Timer";
// import HelpPopUp from '../HelpPopUp';

const MealConfirmation = (props) => {
  console.log(props.mealChoiceArr);

  const handleSubmit = () => {
    console.log("submit success");
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className='content'>
      <NavBar />
      {/* <HelpPopUp /> */}
      {/* <Timer className={styles.timerMealConfirm}/> */}

      {/* <main> */}
        <div className={`mainSection ${styles.mealConfirmLayout}`}>
          {/* <div className={styles.milkyBackground}></div> */}
          <div className={`box-style-1 ${styles.mealConfirmMilky}`}>
            <h1>Your Meal Choices</h1>
            <Link to="mealselection">
                <FontAwesomeIcon
                  onClick={props.clearArr}
                  icon="pen"
                  className={styles.penIcon}
                />
            </Link>
            <div className={styles.mealConfirmBox}>
              <section className={styles.confirmMenu}>
                {days.map((day) => {
                  let i = days.indexOf(day);
                    return (
                      <>
                        <MealCard day={day} meal={props.mealChoiceArr[i]}  />
                      </>
                    )
                  })
                }
              </section>
              <Link to="/">
                <button className={`button-style-1 ${styles.confirmationButton}`} onClick={handleSubmit}>CHECKOUT</button>
              </Link>
            </div>
          </div>
        </div>
      {/* </main> */}
    </div>
  );
};

export default MealConfirmation;
