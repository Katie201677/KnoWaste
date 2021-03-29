import React, { useState, useEffect } from "react";
import DailySelection from "./DailySelection/DailySelection.jsx";
import styles from "./WeeklyPlanner.module.scss";
import { firestore } from "../../../firebase.js";

// pass in firebase firestore data str8 into here..........

//  find meal collection
//  get the diff arrays
//  pass into each correspoding day
//  display

const WeeklyPlanner = (props) => {
  const { mealData } = props;

  //Accordion that holds each Card Selection for each day.
  const [activeDate, setActiveDate] = useState("Monday");

  const handleClickOnImg = (day) => {
    const dayArr = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let indexDate = dayArr.indexOf(day);
    const nextDay = dayArr[indexDate + 1];
    setActiveDate(nextDay);
  };

  // passing meal data for each day as props into DailySelection
  // props.mealData[i] -> i = index and refers to the day in the week: i = 0 -> Monday...

  return (
    <>
      {mealData.length > 0 ? (
        <div>
          <DailySelection
            mealDayData={mealData[0]}
            date="Monday"
            setActiveDate={setActiveDate}
            activeDate={activeDate}
            action={() => handleClickOnImg("Monday")}
          />

          <DailySelection
            mealDayData={mealData[1]}
            date="Tuesday"
            setActiveDate={setActiveDate}
            activeDate={activeDate}
            action={() => handleClickOnImg("Tuesday")}
          />

          <DailySelection
            mealDayData={mealData[2]}
            date="Wednesday"
            setActiveDate={setActiveDate}
            activeDate={activeDate}
            action={() => handleClickOnImg("Wednesday")}
          />
        </div>
      ) : null}
    </>
  );
};

export default WeeklyPlanner;
