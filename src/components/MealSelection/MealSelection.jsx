import React from 'react';
import TimeBar from './TimeBar';
import NavBar from './NavBar';
import WeeklyPlanner from './WeeklyPlanner';

import styles from './MealSelection.module.scss';

const MealSelection = () => {

  return (
  <div className={styles.page}>
    <TimeBar />
    <WeeklyPlanner />
    <NavBar />
  </div>
  );
}

export default MealSelection;

