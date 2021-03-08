import React from 'react';
import PropTypes from 'prop-types';
import styles from './RecipeCard.module.scss';

const RecipeCard = (props) => {
  //Each individual recipe information in a card format.
  const {action,isSelected, setIsSelected, selectItem} = props;
  const {type, recipeName, dietaryrestriction} = props.mealChoice;
  

  return (
    <div className={styles.recipeCard}>
      <section>
        <img src="https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-2.jpg" alt={type} className={styles.recipeImg} onClick={action} onClick={selectItem}/>
        <h3>{recipeName}</h3>
      </section>
      <section className={styles.dietRestrictions}>
       <p>{dietaryrestriction.join(" ")}</p>
      </section>
    </div>
  )
}

export default RecipeCard
