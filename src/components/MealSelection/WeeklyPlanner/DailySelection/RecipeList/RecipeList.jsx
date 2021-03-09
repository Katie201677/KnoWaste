import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';
import styles from './RecipeList.module.scss';



const RecipeList = (props) => {
  const {action, isSelected, setIsSelected, selectItem, meal, getActiveMeal, activeMeal} = props;
  //Holds and organises the daily selection of food.
  

  return (
    <div className={styles.recipeList}>
      <section className={styles.transparentMeals}> 
        <RecipeCard mealChoice={meal[0]} action={action} isSelected={isSelected} selectItem={selectItem} getActiveMeal={getActiveMeal} activeMeal={activeMeal}/>
        <RecipeCard mealChoice={meal[1]} action={action} isSelected={isSelected} selectItem={selectItem} getActiveMeal={getActiveMeal} activeMeal={activeMeal}/>
        <RecipeCard mealChoice={meal[2]} action={action} isSelected={isSelected} selectItem={selectItem} getActiveMeal={getActiveMeal} activeMeal={activeMeal}/>
      </section>
      
    </div>
  )
}

export default RecipeList
