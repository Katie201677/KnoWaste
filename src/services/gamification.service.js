import { firestore } from "../firebase";
import { getCurrentWeekID } from "../services/weekid.service";

const getUserById = async (id) => {
  
}

export const getUsersCarbon = async () => {
    const meals = await firestore
      .collection("meals")
      .get()
      .then((meals) => {
        return meals.docs.map((meal) => {
          return {
            mealId: meal.data().data.mealName.split(' ').join(''),
            mealCarbon: meal.data().data.mealCarbon,
          };
        });
      });

    const users = await firestore
      .collection("users")
      .get()
      .then((users) => {
        return users.docs.map((user) => {
          return {
            userId: user.id,
            userName: user.data().name,
          };
        });
      });

    const orders = await firestore
      .collection("orders")
      .get()
      .then((orderCollection) => {
        return orderCollection.docs.map((doc) => {
          const thisWeek = getCurrentWeekID();

          // access each object in the 'meals' array that matches the mealId of this, and get the mealCarbon property
          const getMealIdArr = () =>
            doc.data()[thisWeek] ? doc.data()[thisWeek] : [];
          const mealIdArr = getMealIdArr();
          //console.log("mealIdArr");
          //console.log(mealIdArr);

          const weeksCarbon = mealIdArr.map((order) => {
            let matchingMeal = meals.find((meal) => {
              if (!meal) {
                return order;
              } else {
                return meal.mealId == order;
              }
            });

            if (matchingMeal === undefined) {
              return 0;
            } else {
              return parseInt(matchingMeal.mealCarbon);
            }
          });

          const user = users.find(user => {
              return user.userId === doc.id
          })

          // add them together and divide them by the length of the mealIds array
          const carbonSum = weeksCarbon.reduce((a, b) => {
            return a + b;
          }, 0);
          const carbonAvg = carbonSum / mealIdArr.length;
          return {
            mealIds: doc.data()[thisWeek],
            userId: doc.id,
            userName: user ? user.userName : "unknown",
            avgCarbon: carbonAvg,
            maxCarbon: carbonSum
          };
        });
      });

    return orders;
  };

  
