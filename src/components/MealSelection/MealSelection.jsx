import React from 'react';
import Timer from './Timer';
import Navigation from './Navigation';
import WeeklyPlanner from './WeeklyPlanner';
import styles from './MealSelection.module.scss';

const MealSelection = () => {

  return (
  <div className={styles.page}>
    <Timer />
    <WeeklyPlanner />
    <Navigation />
  </div>
  );
}

export default MealSelection;

