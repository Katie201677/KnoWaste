import React from 'react'
import RecipeCard from './RecipeCard/RecipeCard';
import styles from './RecipeList.module.scss';



const RecipeList = () => {
  //Holds and organises the daily selection of food.
  const mealsOptions = [{type: "meat", recipeName: "Chicken Tikka Masala", dietaryrestriction: ["nuts", "gluten", "lactose"]}, {type: "fish", recipeName: "I am a fish", dietaryrestriction: ["nuts", "gluten", "lactose"]}, {type: "vegetarian", recipeName: "A single brocolli", dietaryrestriction: ["nuts", "gluten", "lactose"]}]
  const meal = mealsOptions.map(meal => {
    return meal
  })


  return (
    <div className={styles.recipeList}>
      <section className={styles.transparentMeals}> 
        <RecipeCard mealChoice = {meal[0]}/>
        <RecipeCard mealChoice = {meal[1]}/>
        <RecipeCard mealChoice = {meal[2]}/>
      </section>
      
    </div>
  )
}

export default RecipeList
