import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';
import styles from './RecipeList.module.scss';



const RecipeList = (props) => {
  const {action, selectItem, meal, getActiveMeal} = props;
  //Holds and organises the daily selection of food.
  

  return (
    <div className={styles.recipeList}>
      <section className={styles.transparentMeals}> 
        <RecipeCard mealChoice={meal[0]} action={action} selectItem={selectItem} getActiveMeal={getActiveMeal} />
        <RecipeCard mealChoice={meal[1]} action={action} selectItem={selectItem} getActiveMeal={getActiveMeal} />
        <RecipeCard mealChoice={meal[2]} action={action} selectItem={selectItem} getActiveMeal={getActiveMeal} />
      </section>
      
    </div>
  )
}

export default RecipeList
