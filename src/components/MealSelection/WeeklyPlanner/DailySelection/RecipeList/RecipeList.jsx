import React, { useState } from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import styles from "./RecipeList.module.scss";

const RecipeList = (props) => {

  const { mealDayData, action, addChosenMeal } = props;

  let mealChoice1 = mealDayData.mealOption1;
  let mealChoice2 = mealDayData.mealOption2;
  let mealChoice3 = mealDayData.mealOption3;

  return (
    <div className={styles.recipeList}>
      {
        mealDayData && 
        <section className={`box-style-2 ${styles.sectionFlex}`}>
          <RecipeCard mealChoice={mealChoice1} action={action} addChosenMeal={addChosenMeal}/>
          <RecipeCard mealChoice={mealChoice2} action={action} addChosenMeal={addChosenMeal}/>
          <RecipeCard mealChoice={mealChoice3} action={action} addChosenMeal={addChosenMeal}/>
        </section>
      }
    </div>
  );
};

export default RecipeList;
