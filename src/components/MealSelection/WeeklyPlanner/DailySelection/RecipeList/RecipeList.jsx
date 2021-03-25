import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';
import styles from './RecipeList.module.scss';

const RecipeList = (props) => {
  const { action, meal } = props;
  //Holds and organises the daily selection of food.

  
  

  return (
    <div className={styles.recipeList}>
      <section className={styles.transparentMeals}> 
        <RecipeCard mealChoice={meal.mealOption1} action={action} />
        <RecipeCard mealChoice={meal.mealOption2} action={action} />
        <RecipeCard mealChoice={meal.mealOption3} action={action} />
      </section>
      
    </div>
  )
}

export default RecipeList
