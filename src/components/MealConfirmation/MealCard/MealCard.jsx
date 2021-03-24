import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MealCard.module.scss";
import { Link } from "react-router-dom";

const MealCard = (prop) => {
  const { day, meal, clearArr } = prop;
  return (
    <div>
      {/* <div>
        <FontAwesomeIcon icon="arrow-right" className={styles.arrowIcon} />
      </div> */}
      <div className = {`box-style-2 ${styles.dayCard}`}>
        <div className={styles.mealInfo}>
          <h3 className ={styles.confirmDay}>{day}</h3>
          <Link to="mealselection">
              <FontAwesomeIcon
                onClick={clearArr}
                icon="pen"
                className={styles.penIcon}
              />
          </Link>
        </div>
        <div className={styles.mealDataFire}>
          {/* <img src={meal.img}></img> */}
          {/* <p>{meal.name}</p> */}
        </div>
      </div>
       
    </div>
  );
};

export default MealCard;
