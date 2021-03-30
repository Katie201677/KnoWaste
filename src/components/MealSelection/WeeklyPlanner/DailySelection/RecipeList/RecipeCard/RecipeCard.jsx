import React, { useEffect, useState } from "react";
import styles from "./RecipeCard.module.scss";
import { firestore } from "../../../../../../firebase.js";

let mealInfo;

const RecipeCard = (props) => {
  const { action, mealChoice, setMealChoice } = props;
  const [loading, setLoading] = useState(false);

  const getMealInfo = () => {
    firestore
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
    getMealInfo();
  }, []);

  const selectMeal = () => {
    setMealChoice(mealInfo.data.mealName);
    console.log(mealInfo.data.mealName)
  }

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

         <button className={"button-style-1 " + styles.selectButton} onClick={()=>selectMeal()}>
            Select
          </button>
        </section>
      </div>
      } 
    </>
  );
};

export default RecipeCard;