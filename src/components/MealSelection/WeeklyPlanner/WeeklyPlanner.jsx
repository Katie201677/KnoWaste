import React, { useState, useEffect, useContext } from "react";
import DailySelection from "./DailySelection/DailySelection.jsx";
import styles from "./WeeklyPlanner.module.scss";

const WeeklyPlanner = (props) => {
  const { mealData, addChosenMeal } = props;

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
            addChosenMeal = {addChosenMeal}
          />
          
          <DailySelection
            mealDayData={mealData[1]}
            date="Tuesday"
            setActiveDate={setActiveDate}
            activeDate={activeDate}
            action={() => handleClickOnImg("Tuesday")}
            addChosenMeal = {addChosenMeal}
          />

          <DailySelection
            mealDayData={mealData[2]}
            date="Wednesday"
            setActiveDate={setActiveDate}
            activeDate={activeDate}
            action={() => handleClickOnImg("Wednesday")}
            addChosenMeal = {addChosenMeal}
          />

          <DailySelection
            mealDayData={mealData[3]}
            date="Thursday"
            setActiveDate={setActiveDate}
            activeDate={activeDate}
            action={() => handleClickOnImg("Thursday")}
            addChosenMeal = {addChosenMeal}
          />

          <DailySelection
            mealDayData={mealData[4]}
            date="Friday"
            setActiveDate={setActiveDate}
            activeDate={activeDate}
            action={() => handleClickOnImg("Friday")}
            addChosenMeal = {addChosenMeal}
          />

          <DailySelection
            mealDayData={mealData[5]}
            date="Saturday"
            setActiveDate={setActiveDate}
            activeDate={activeDate}
            action={() => handleClickOnImg("Saturday")}
            addChosenMeal = {addChosenMeal}
          />
          
          <DailySelection
            mealDayData={mealData[6]}
            date="Sunday"
            setActiveDate={setActiveDate}
            activeDate={activeDate}
            action={() => handleClickOnImg("Sunday")}
            addChosenMeal = {addChosenMeal}
          />

        </div>
      ) : null}
    </>
  );
};

export default WeeklyPlanner;
