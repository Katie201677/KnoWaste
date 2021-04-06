import React, { useEffect, useState } from "react";
import styles from "./RecipeCard.module.scss";
import { firestore } from "../../../../../../firebase.js";

let mealInfo;
let mealName;

const RecipeCard = (props) => {
  const { action, mealChoice, addChosenMeal } = props;
  const [loading, setLoading] = useState(false);

  let chosenMeal = '';

  const selectMeal = (e) => {
    action();
    chosenMeal = e.target.value;
    return addChosenMeal(chosenMeal);
  }

  const getMealInfo =  async () => {
    await firestore
      .collection("meals")
      .doc(mealChoice)
      .get()
      .then((response) => {
        mealInfo = response.data();
        setLoading(true)
        return mealInfo;
      });
  };

  useEffect(() => { 
    const letsGo = async () => {
      await getMealInfo();
    }
    letsGo();
  }, []);

  return (
    <>
    { loading &&
      <div className={styles.recipeCard + " box-style-2"}>
        <img
          // src={mealInfo.imageUrl}
          alt={mealInfo.data.mealName}
          className={styles.recipeImg}
        />

        <section className={styles.foodInfo}>
           <h3>{mealInfo.data.mealName}</h3> 
          <p>{mealInfo.data.mealDescription}</p> 

          <section className={styles.dietRestrictions}>
          <p>{mealInfo.data.mealAllergens.join(" ")}</p>
          </section>

         <button value={mealInfo.data.mealName} className={"button-style-1 " + styles.selectButton} onClick={selectMeal}>
            Select
          </button>
        </section>
      </div>
      } 
    </>
  );
};

export default RecipeCard;