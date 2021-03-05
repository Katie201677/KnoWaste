import react from 'react';
import Timebar from './Timebar';
import Navbar from './Navbar';
import CardList from './CardList';

import styles from './MealSelection.module.scss';

const MealSelection = () => {
  return (
  <div>
    <Timebar />
    <CardList />
    <Navbar />
  </div>
  );
}

export default MealSelection;

