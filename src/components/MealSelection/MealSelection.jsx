import react from 'react';
import TimeBar from './TimeBar';
import NavBar from './NavBar';
import CardList from './CardList';

import styles from './MealSelection.module.scss';

const MealSelection = () => {
  return (
  <div>
    <TimeBar />
    <CardList className={styles.cardList} />
    <NavBar />
  </div>
  );
}

export default MealSelection;

