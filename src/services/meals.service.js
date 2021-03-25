import { firestore } from "../firebase";

// firebase.initializeApp(firebaseConfig);
// const db = firestore;

export const createMeal = (data) => {
  var docRef = firestore.collection("meals").doc(data.mealName);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        alert("Meal name already taken");
      } else {
        // doc.data() will be undefined in this case
        docRef
          .set({
            data,
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
};


export const getAllMeals = () => {
  let mealsArray = []
  var collectionRef = firestore.collection("meals");
  collectionRef.get().then((response) => {
    response.forEach((doc) => {
      mealsArray.push(doc.data());
      
    });
    return mealsArray
  });
};

// const updateMeal = (data) => {
// No functionailty for Admin to edit an existing meal, not necessary?
// };

export const deleteMeal = (firebaseMealId) => {
  firestore.collection("meals").doc(firebaseMealId).delete();
};

//check if doc/meal already exists
