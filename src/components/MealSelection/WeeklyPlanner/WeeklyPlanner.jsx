import React, {useState, useEffect} from 'react'
import DailySelection from './DailySelection/DailySelection.jsx';
import styles from './WeeklyPlanner.module.scss';
import { firestore } from '../../../firebase.js';
 
// pass in firebase firestore data str8 into here..........

//  find meal collection 
//  get the diff arrays
//  pass into each correspoding day
//  display


const WeeklyPlanner = (props) => {

  const [weeksMeals, setWeeksMeals] = useState('sos');

  // const getWeeklyMeals = () => 
  //   firestore.collection('weeksMeals').doc('210322').get()
  //   .then(response => {
  //   setWeeksMeals(response.data());
  // })

  // const getWeeklyMeals = () => {
  //   firestore.collection('weeksMeals').doc('210322').get()
  //   .then(response => response.data)
  //   .then(response => setWeeksMeals(response.data));
  // }

  useEffect(async () => {
    await firestore.collection('weeksMeals').doc('210322').get()
    .then(response => {
    setWeeksMeals(response.data());
    console.log(response.data());
    console.log(weeksMeals);
    })
  }, [])

  // console.log(weeksMeals.monMealOptions.mealOption1);

  //Accordion that holds each Card Selection for each day.
  const [activeDate, setActiveDate] = useState("Monday");

  const handleClickOnImg = (day) => {
    const dayArr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    
    let indexDate = dayArr.indexOf(day)
    const nextDay = dayArr[indexDate+1]
     setActiveDate(nextDay);
    
  }

  // passing meal data for each day as props into DailySelection
  // props.mealData[i] -> i = index and refers to the day in the week: i = 0 -> Monday...

  return (
    <div>
      {/* Monday */}
      {/* <DailySelection getMealChoice={weeksMeals.monMealOptions.mealOption1} mealDayData={props.mealData[0]} date="Monday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Monday")} /> */}
      
      {/* Tuesday */}
      {/* <DailySelection getMealChoice={props.getMealChoice} mealDayData={props.mealData[1]} date="Tuesday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Tuesday")} /> */}
      
      {/* Wednesday */}
      {/* <DailySelection getMealChoice={props.getMealChoice} mealDayData={props.mealData[2]} date="Wednesday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Wednesday")}/> */}
      
      {/* Thursday */}
      {/* <DailySelection getMealChoice={props.getMealChoice} mealDayData={props.mealData[3]} date="Thursday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Thursday")}/> */}
      
      {/* Friday */}
      {/* <DailySelection getMealChoice={props.getMealChoice} mealDayData={props.mealData[4]} date="Friday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Friday")}/> */}
      
      {/* Saturday */}
      {/* <DailySelection getMealChoice={props.getMealChoice} mealDayData={props.mealData[5]} date="Saturday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Saturday")}/> */}
      
      {/* Sunday */}
      {/* <DailySelection getMealChoice={props.getMealChoice} mealDayData={props.mealData[6]} date="Sunday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Sunday")}/> */}
    </div>
  )
}

export default WeeklyPlanner
