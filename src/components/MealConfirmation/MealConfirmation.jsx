import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from "../../data/fa-library.js";
import styles from "./MealConfirmation.module.scss";
import MealCard from "./MealCard";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Timer from "../MealSelection/Timer";

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

    <div className={`content ${styles.background}`}>
      <Timer />
      <NavBar />
      <main>
        <div className={styles.mainDiv}>
          {/* <div className={styles.milkyBackground}></div> */}
          <h1>Your Meal Choices</h1>

          <Link to="mealselection">
            <FontAwesomeIcon
              onClick={props.clearArr}
              icon="pen"
              className={styles.penIcon}
            />
          </Link>

          <section className={styles.confirmMenu}>
            {
              <ul>
                {days.map((day) => {
                  let i = days.indexOf(day);
                    return (
                      <>
                        <MealCard day={day} meal={props.mealChoiceArr[i]}  />
                      </>
                    )
                  })
                }
              </ul>
            }
          </section>
          <Link to="/">
            <button className="confirmationButton" onClick={handleSubmit}>CHECKOUT</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default MealConfirmation;
