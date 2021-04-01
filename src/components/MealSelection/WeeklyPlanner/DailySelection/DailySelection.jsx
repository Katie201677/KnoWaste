import React, { useState } from "react";
import styles from "./DailySelection.module.scss";
import RecipeList from "./RecipeList";
import DayDateBar from "./DayDateBar/DayDateBar.jsx";
import { firestore } from "../../../../firebase.js";

const DailySelection = (props) => {
  const { date, setActiveDate, activeDate, action, mealDayData, addChosenMeal } = props;

  // mealOption is an array with three objects. Each object is a meal option.
  // The meal option object keys are the bits of meal information display.
  //  const mealOptions = [{type: "meat", imgSrc: mealDayData[0].mealImage ,recipeName: mealDayData[0].mealName, dietaryrestriction: mealDayData[0].mealDiet},
  //                     {type: "fish", imgSrc: mealDayData[1].mealImage, recipeName: mealDayData[1].mealName, dietaryrestriction: mealDayData[1].mealDiet},
  // //                     {type: "vegetarian", imgSrc: mealDayData[2].mealImage, recipeName: mealDayData[2].mealName, dietaryrestriction: mealDayData[2].mealDiet}]

  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.dailySelection && "box-style-2"}>
      {/* <DayDateBar date={date} setActiveDate={setActiveDate} activeDate={activeDate} isSelected={isSelected} activeMeal={activeMeal} action={action} getActiveMeal={getActiveMeal}/> */}
      <DayDateBar
        date={date}
        setActiveDate={setActiveDate}
        activeDate={activeDate}
        action={action}
      />
      <RecipeList mealDayData={mealDayData} addChosenMeal={addChosenMeal}/>
      {/* <div className="box-style-2">{() => getMealInfo(dayOption1)}</div>
      <div className="box-style-2">{() => getMealInfo(dayOption2)}</div>
      <div className="box-style-2">{() => getMealInfo(dayOption3)}</div>
      <div className="box-style-2">{() => getMealInfo(dayOption4)}</div>
      <div className="box-style-2">{() => getMealInfo(dayOption5)}</div>
      <div className="box-style-2">{() => getMealInfo(dayOption6)}</div>
      <div className="box-style-2">{() => getMealInfo(dayOption7)}</div> */}
    </div>
  );
};

export default DailySelection;
