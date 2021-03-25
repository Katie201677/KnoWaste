import React from 'react';
import styles from './RecipeCard.module.scss';

const RecipeCard = (props) => {
  //Each individual recipe information in a card format.
  const {action, mealChoice } = props;
  console.log("the meal choice is");
  console.log(mealChoice);
  // const {imgSrc, recipeName, dietaryrestriction} = props.mealChoice;
  

  return (
    <div className={styles.recipeCard + " box-style-2"}>
        {/* <img src={imgSrc} alt={recipeName} className={styles.recipeImg} /> */}

        
      <section className={styles.foodInfo}>
        {/* <h3>{recipeName}</h3> */}
        <h3>{mealChoice}</h3>
        {/* <p>Served with fondant potatoes and some salad!</p> */}

        {/* <section className={styles.dietRestrictions}> */}
          {/* <p>{dietaryrestriction.join(" ")}</p> */}
        {/* </section> */}

        {/* <button className={"button-style-1 " + styles.selectButton} onClick={() => {getActiveMeal(recipeName); selectItem(); action();}}>
          Select
        </button> */}
        
      </section>
    </div>
  )
}

export default RecipeCard
