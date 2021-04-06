import { firestore } from "../firebase";
import { getCurrentWeekID } from "./weekid.service";

// firebase.initializeApp(firebaseConfig);
// const db = firestore;

export const createMeal = (data,url) => {
  let docRef = firestore.collection("meals").doc(data.mealName.split(" ").join(""));
    
  docRef.get()
    .then((doc) => {
      if (doc.exists) {
        alert("Meal name already taken");
      } else {
        // doc.data() will be undefined in this case
        docRef
          .set({
            data,
            imageUrl: url,
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

  return 1;
};

export const addMealsToWeeklyPlanner = (data) => {
  var collectionRef = firestore
    .collection("weeksMeals")
    .doc(getCurrentWeekID());

  collectionRef
    .get()
    .then((doc) => {
      collectionRef
        .set({
          day1MealOptions: {
            mealOption1: data.mondayMeal1,
            mealOption2: data.mondayMeal2,
            mealOption3: data.mondayMeal3,
          },
          day2MealOptions: {
            mealOption1: data.tuesdayMeal1,
            mealOption2: data.tuesdayMeal2,
            mealOption3: data.tuesdayMeal3,
          },
          day3MealOptions: {
            mealOption1: data.wednesdayMeal1,
            mealOption2: data.wednesdayMeal2,
            mealOption3: data.wednesdayMeal3,
          },
          day4MealOptions: {
            mealOption1: data.thursdayMeal1,
            mealOption2: data.thursdayMeal2,
            mealOption3: data.thursdayMeal3,
          },
          day5MealOptions: {
            mealOption1: data.fridayMeal1,
            mealOption2: data.fridayMeal2,
            mealOption3: data.fridayMeal3,
          },
          day6MealOptions: {
            mealOption1: data.saturdayMeal1,
            mealOption2: data.saturdayMeal2,
            mealOption3: data.saturdayMeal3,
          },
          day7MealOptions: {
            mealOption1: data.sundayMeal1,
            mealOption2: data.sundayMeal2,
            mealOption3: data.sundayMeal3,
          },
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

  return 1;
};

export const getAllMeals = () => {
  var collectionRef = firestore.collection("meals").get();
  return collectionRef.then((response) => {
    return response.docs.map((doc) => doc.id);
  });
};


// export const getAllMeals = async () => {
//   // let mealsArray = []
//   firestore.collection("meals").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id);
//     });
// });
// };

// const updateMeal = (data) => {
// No functionailty for Admin to edit an existing meal, not necessary?
// };

export const deleteMeal = (firebaseMealId) => {
  firestore.collection("meals").doc(firebaseMealId).delete();
};

//check if doc/meal already exists
