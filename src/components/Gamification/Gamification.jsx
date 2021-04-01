import React, { useEffect } from "react";
import styles from "./Gamification.module.scss";
import { firestore } from "../../firebase";
import { getCurrentWeekID } from "../../services/weekid.service";

const Gamification = () => {
  // ADD UP EACH USERS CARBON USAGE AND DIVIDE IT BY AMOUNT OF MEALS THEY ATE
  const getUsersCarbon = async () => {
    const meals = await firestore
      .collection("meals")
      .get()
      .then((meals) => {
        return meals.docs.map((meal) => {
          return {
            mealId: meal.data().data.mealName,
            mealCarbon: meal.data().data.mealCarbon,
          };
        });
      });
    console.log("meals");
    console.log(meals);

    const orders = await firestore
      .collection("orders")
      .get()
      .then((orders) => {
        return orders.docs.map((doc) => {
          const thisWeek = getCurrentWeekID();

          // access each object in the 'meals' array that matches the mealId of this, and get the mealCarbon property
          const getMealIdArr = () =>
            doc.data()[thisWeek] ? doc.data()[thisWeek] : [];
          const mealIdArr = getMealIdArr();
          console.log("mealIdArr");
          console.log(mealIdArr);
          const weeksCarbon = mealIdArr.map((order) => {
            let matchingMeal = meals.find((meal) => {
              if (!meal) {
                return order;
              } else {
                return meal.mealId == order;
              }
            });
            console.log("matching meal is");
            console.log(matchingMeal);
            if (matchingMeal === undefined) {
              return 0;
            } else {
              return parseInt(matchingMeal.mealCarbon);
            }
          });
          console.log("CABRON");
          console.log(weeksCarbon);
          // add them together and divide them by the length of the mealIds array
          const carbonSum = weeksCarbon.reduce((a, b) => {
            return a + b;
          }, 0);
          const carbonAvg = carbonSum / mealIdArr.length;
          return {
            mealIds: doc.data()[thisWeek],
            userId: doc.id,
            carbon: carbonAvg,
          };
        });
      });
    console.log("orders");
    console.log(orders);
  };

  useEffect(() => {
    getUsersCarbon();
  }, []);
  // REPEAT FOR EACH USER AND ADD TO A LIST
  // SORT BY AVG CARBON USAGE

  return "ur winning!!!!";
};

export default Gamification;
