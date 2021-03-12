import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MealCard.module.scss";

const MealCard = (prop) => {
  const { day, meal } = prop;
  return (
    <li>
      <div>
        <FontAwesomeIcon icon="arrow-right" className={styles.arrowIcon} />
      </div>
      <div className = {styles.mealInfo}>
          <h3>{day}</h3>
          <p>{meal}</p>
      </div>
      <div>
        <FontAwesomeIcon icon="pen" className={styles.penIcon} />
      </div>
    </li>
  );
};

export default MealCard;
