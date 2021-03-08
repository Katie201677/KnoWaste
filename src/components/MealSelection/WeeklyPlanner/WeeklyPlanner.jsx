import React, {useState} from 'react'
import DailySelection from './DailySelection/DailySelection.jsx';
import styles from './WeeklyPlanner.module.scss';
import PropTypes from 'prop-types';

const WeeklyPlanner = () => {
  //Accordion that holds each Card Selection for each day.
  const [activeDate, setActiveDate] = useState("Monday");
  let date = "";

  const handleClickOnImg = (date) => {
    const dayArr = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
    
    let indexDate = dayArr.indexOf(date)
    const nextDay = dayArr[indexDate+1]
    console.log("nextDay",nextDay)
    setActiveDate(nextDay);
    
  }

  return (
    <div className={styles.weeklySelection}>
      <DailySelection date="Monday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Monday")}/>
      <DailySelection date="Tuesday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Tuesday")} />
      <DailySelection date="Wednesday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Wednesday")}/>
      <DailySelection date="Thursday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Thursday")}/>
      <DailySelection date="Friday" setActiveDate={setActiveDate} activeDate={activeDate} action={() => handleClickOnImg("Friday")}/>
    </div>
  )
}

export default WeeklyPlanner
