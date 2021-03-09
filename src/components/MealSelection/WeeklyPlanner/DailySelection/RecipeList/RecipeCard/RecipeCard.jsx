import React from 'react';
import PropTypes from 'prop-types';
import styles from './RecipeCard.module.scss';

const RecipeCard = (props) => {
  //Each individual recipe information in a card format.
  const {action,isSelected, selectItem, getActiveMeal, activeMeal} = props;
  const {imgSrc, recipeName, dietaryrestriction} = props.mealChoice;
  

  return (
    <div className={styles.recipeCard}>
      <section>
        <img src={imgSrc} alt={recipeName} className={styles.recipeImg} 
            onClick={() => {getActiveMeal(recipeName); selectItem(); action();}} />
        
        <h3>{recipeName}</h3>
      </section>

      <section className={styles.dietRestrictions}>
       <p>{dietaryrestriction.join(" ")}</p>
      </section>
    </div>
  )
}

export default RecipeCard
