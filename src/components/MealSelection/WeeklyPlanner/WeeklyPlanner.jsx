import React, {useState} from 'react'
import DailySelection from './DailySelection/DailySelection.jsx';
import styles from './WeeklyPlanner.module.scss';


const WeeklyPlanner = (props) => {
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

  // console.log(props.mealData[0])
  return (
    <div className={styles.weeklySelection}>
      <DailySelection mealDayData={props.mealData[0]} date="Monday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Monday")} />
      
      <DailySelection mealDayData={props.mealData[1]} date="Tuesday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Tuesday")} />
      
      <DailySelection mealDayData={props.mealData[2]} date="Wednesday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Wednesday")}/>
      
      <DailySelection mealDayData={props.mealData[3]} date="Thursday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Thursday")}/>
      
      <DailySelection mealDayData={props.mealData[4]} date="Friday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Friday")}/>
      
      <DailySelection mealDayData={props.mealData[5]} date="Saturday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Saturday")}/>
      
      <DailySelection mealDayData={props.mealData[6]} date="Sunday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Sunday")}/>
    </div>
  )
}

export default WeeklyPlanner
