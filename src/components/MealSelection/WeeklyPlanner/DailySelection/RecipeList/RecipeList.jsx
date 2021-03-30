import React from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import styles from "./RecipeList.module.scss";

const RecipeList = (props) => {
  // const { action, meal } = props;
  //Holds and organises the daily selection of food.

  const { mealDayData, action, setMealChoice } = props;

  let mealChoice1 = mealDayData.mealOption1;
  let mealChoice2 = mealDayData.mealOption2;
  let mealChoice3 = mealDayData.mealOption3;

  return (
    <div className={styles.recipeList}>
      <section className={`box-style-2 ${styles.sectionFlex}`}>
        <RecipeCard mealChoice={mealChoice1} action={action} setMealChoice={setMealChoice}/>
        <RecipeCard mealChoice={mealChoice2} action={action} setMealChoice={setMealChoice}/>
        <RecipeCard mealChoice={mealChoice3} action={action} setMealChoice={setMealChoice}/>
      </section>
    </div>
  );
};

export default RecipeList;
