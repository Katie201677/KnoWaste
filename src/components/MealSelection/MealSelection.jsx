import react from 'react';
import TimeBar from './TimeBar';
import NavBar from './NavBar';
import WeekPlanner from './WeekPlanner';

import styles from './MealSelection.module.scss';

const MealSelection = () => {
  return (
  <div>
    <TimeBar />
    <WeekPlanner className={styles.classList} />
    <NavBar />
  </div>
  );
}

export default MealSelection;

