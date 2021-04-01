import React, { useState, useEffect, useContext } from "react";
import { getCurrentWeekID } from "../../services/weekid.service.js"
import NavBar from "../NavBar";
import WeeklyPlanner from "./WeeklyPlanner";
import styles from "./MealSelection.module.scss";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase.js";
import { UserContext } from "../../context/contextUser";


const MealSelection = (props) => {
  let mon;
  let tues;
  let wed;
  let thurs;
  let fri;
  let sat;
  let sun;

  const [weeksMeals, setWeeksMeals] = useState([]);
  const {user} = useContext(UserContext);

  let chosenMeals = [];

  const addChosenMeal = (lasagna) => {
    chosenMeals.push(lasagna);
    console.log('choosing a meal!');
    console.log(chosenMeals);
  } 

  const uploadMeals = () => {
    let weekId = getCurrentWeekID();
    console.log(weekId);
    console.log(user.uid);
    console.log('deciding nooooow')
    firestore.collection('orders').doc(user.uid)
    .set(
      {[weekId]: chosenMeals }
    )
  }

  const getWeeklyMeals = () => {
    firestore
      .collection("weeksMeals")
      .doc(getCurrentWeekID())
      .get()
      .then((response) => {
        let weekObj = response.data();
        mon = weekObj.day1MealOptions;
        tues = weekObj.day2MealOptions;
        wed = weekObj.day3MealOptions;
        thurs = weekObj.day4MealOptions;
        fri = weekObj.day5MealOptions;
        sat = weekObj.day6MealOptions;
        sun = weekObj.day7MealOptions;
        setWeeksMeals([mon, tues, wed, thurs, fri, sat, sun]);
      });
  };

  useEffect(() => {
    getWeeklyMeals();
  }, []);

  return (
    <div className="content">
      <NavBar />
      <div className={`${styles.page} mainSection`}>
        {weeksMeals.length > 0 ? <WeeklyPlanner mealData={weeksMeals} addChosenMeal={addChosenMeal} /> : null}
        <button onClick={() => uploadMeals()} className={"button-style-1 " + styles.btnReview}>
          <Link to="/mealconfirmation">Review</Link>
        </button>
      </div>
    </div>
  );
};

export default MealSelection;
