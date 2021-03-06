import React from 'react'
import DailySelection from './DailySelection/DailySelection.jsx';
import styles from './WeeklyPlanner.module.scss';


const WeeklyPlanner = () => {
  //Accordion that holds each Card Selection for each day.
  return (
    <div className={styles.weeklySelection}>
      <DailySelection />
      
      
    </div>
  )
}

export default WeeklyPlanner
