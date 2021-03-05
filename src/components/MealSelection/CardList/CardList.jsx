import React from 'react'
import RecipeCard from '../RecipeCard';
import styles from './CardList.module.scss';



const CardList = () => {
  const mealsOptions = [{type: "meat", recipeName: "Chicken Tikka Masala", dietaryrestriction: ["nuts", "gluten", "lactose"]}, {type: "fish", recipeName: "I am a fish", dietaryrestriction: ["nuts", "gluten", "lactose"]}, {type: "vegetarian", recipeName: "A single brocolli", dietaryrestriction: ["nuts", "gluten", "lactose"]}]
  const meal = mealsOptions.map(meal => {
    return meal
  })
  return (
    <div>
      <RecipeCard mealChoice = {meal[0]}/>
      <RecipeCard mealChoice = {meal[1]}/>
      <RecipeCard mealChoice = {meal[2]}/>
    </div>
  )
}

export default CardList
