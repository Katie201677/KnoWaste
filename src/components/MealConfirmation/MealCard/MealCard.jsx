import React, { useEffect } from "react";
import styles from "./MealCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { firestore } from "../../../firebase";
import MealSelection from "../../MealSelection/MealSelection";

const MealCard = (prop) => {
  const { day, meal } = prop;

  return (
    <div>
      {
        meal &&
        <div className = {`box-style-2 ${styles.dayCard}`}>
          <h3 className ={styles.confirmDay}>{day}</h3>
          <p className= {styles.confirmMeal} >{meal}</p>
        </div>
      } 
    </div>
  );
};

export default MealCard;
