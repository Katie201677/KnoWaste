import React from 'react';
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
>>>>>>> c735b753d2aae56d151a9d29f52717c570c924fd
import RecipeCard from './RecipeCard/RecipeCard';
import styles from './RecipeList.module.scss';



const RecipeList = (props) => {
  const {action, isSelected, setIsSelected, selectItem, meal} = props;
  //Holds and organises the daily selection of food.
  

  return (
    <div className={styles.recipeList}>
      <section className={styles.transparentMeals}> 
        <RecipeCard mealChoice = {meal[0]} action={action} isSelected={isSelected} setIsSelected={setIsSelected} selectItem={selectItem}/>
        <RecipeCard mealChoice = {meal[1]} action={action} isSelected={isSelected} setIsSelected={setIsSelected} selectItem={selectItem}/>
        <RecipeCard mealChoice = {meal[2]} action={action} isSelected={isSelected} setIsSelected={setIsSelected} selectItem={selectItem}/>
      </section>
      
    </div>
  )
}

export default RecipeList
