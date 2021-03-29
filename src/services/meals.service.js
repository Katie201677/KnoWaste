import { firestore } from "../firebase";

// firebase.initializeApp(firebaseConfig);
// const db = firestore;

export const createMeal = (data) => {
  var docRef = firestore
    .collection("meals")
    .doc(data.mealName.split(" ").join(""));
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
