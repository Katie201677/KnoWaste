import React from 'react';
import PropTypes from 'prop-types';
import styles from './RecipeCard.module.scss';

const RecipeCard = (props) => {
  //Each individual recipe information in a card format.
  const {action, selectItem, getActiveMeal} = props;
  const {imgSrc, recipeName, dietaryrestriction} = props.mealChoice;
  

  return (
    <div className={styles.recipeCard}>
        <img src={imgSrc} alt={recipeName} className={styles.recipeImg} 
             onClick={() => {getActiveMeal(recipeName); selectItem(); action();}} />

        
      <section className={styles.foodInfo}>
        <h3>{recipeName}</h3>
        <p>Served with fondant potatoes and some salad!</p>

        <section className={styles.dietRestrictions}>
          <p>{dietaryrestriction.join(" ")}</p>
        </section>
        
      </section>
    </div>
  )
}

export default RecipeCard
