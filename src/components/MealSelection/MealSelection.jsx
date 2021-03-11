import React from 'react';
import Timer from './Timer';
import NavBar from '../NavBar';
import WeeklyPlanner from './WeeklyPlanner';
import styles from './MealSelection.module.scss';

const MealSelection = () => {

  return (
  <div className={styles.page}>
    <NavBar />
    <Timer />
    <WeeklyPlanner />
  
  </div>
  );
}

export default MealSelection;

