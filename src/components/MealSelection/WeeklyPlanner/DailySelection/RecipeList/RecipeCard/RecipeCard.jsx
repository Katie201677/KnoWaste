import React, { useEffect, useState } from "react";
import styles from "./RecipeCard.module.scss";
import { firestore } from "../../../../../../firebase.js";

let mealInfo;

const RecipeCard = (props) => {
  //Each individual recipe information in a card format.
  const { action, mealChoice } = props;
  // const {imgSrc, recipeName, dietaryrestriction} = props.mealChoice;
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

  // data. -->
  // mealAllergens: ["dairy"]
  // mealCarbon: "25"
  // mealDescription: "Just cheese"
  // mealDiet: (2) ["vegetarian", "halal"]
  // mealName: "Cheese"
  // mealWater: "252"
  // __proto__: Object
  // imageUrl: "https://firebasestorage.googleapis.com/v0/b/knowaste-3c92c.appspot.com/o/images%2F18.gif?alt=media&token=d7e746e8-97bc-42ee-938c-4e66cf387d63"
  // __proto__: Object

  useEffect(() => {
    getMealInfo();
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

         <button className={"button-style-1 " + styles.selectButton} onClick={() => {getActiveMeal(mealInfo.data.mealName); selectItem(); action();}}>
            Select
          </button>
        </section>
      </div>
      } 
    </>
  );
};

export default RecipeCard;