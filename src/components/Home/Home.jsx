import React from "react"
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div>
      {/*timer*/}
      {/*info re timer (?)*/}
      {/*improvements since last week etc*/}
      <div className='linkContainer'>
        <a href='./MealSelection'>
          <img className='mealSelection'></img>
        </a>
        <a href='./AboutUs'>
          <img className='aboutUs'></img>
        </a>
        <a href='./Gamification'>
          <img className='gamification'></img>
        </a>
      </div>
      {/*nav bar*/}
    </div>
  );
};

export default Home