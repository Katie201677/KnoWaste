import React from 'react';
import Timer from './Timer';
import NavBar from '../NavBar';
import WeeklyPlanner from './WeeklyPlanner';
import styles from './MealSelection.module.scss';

const MealSelection = (props) => {

  return (
  <div className={styles.page}>
    <NavBar />
    <Timer />
    <WeeklyPlanner mealData = {props.mealData} />
  
  </div>
  );
}

export default MealSelection;

