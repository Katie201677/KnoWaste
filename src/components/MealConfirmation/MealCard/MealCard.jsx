import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MealCard.module.scss";

const MealCard = (prop) => {
  const { day, meal } = prop;
  return (
    <div>
      {/* <div>
        <FontAwesomeIcon icon="arrow-right" className={styles.arrowIcon} />
      </div> */}
      <div className = {`box-style-2 ${styles.mealInfo}`}>
          <h3>{day}</h3>
          <p>{meal}</p>
      </div>
      {/* <div>
        <FontAwesomeIcon icon="pen" className={styles.penIcon} />
      </div> */}
    </div>
  );
};

export default MealCard;
