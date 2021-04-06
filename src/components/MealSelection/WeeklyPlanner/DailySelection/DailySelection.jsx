import React, { useState } from "react";
import styles from "./DailySelection.module.scss";
import RecipeList from "./RecipeList";
import DayDateBar from "./DayDateBar/DayDateBar.jsx";
import { firestore } from "../../../../firebase.js";

const DailySelection = (props) => {
  const { date, setActiveDate, activeDate, action, mealDayData, addChosenMeal } = props;

  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.dailySelection + " box-style-2"}>
  
      <DayDateBar
        date={date}
        setActiveDate={setActiveDate}
        activeDate={activeDate}
        action={action}
      />
      {
        date == activeDate ? <RecipeList  action={action} mealDayData={mealDayData} addChosenMeal={addChosenMeal}/> : null
      }
    </div>
  );
};

export default DailySelection;
