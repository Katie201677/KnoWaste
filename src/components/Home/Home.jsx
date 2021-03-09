import React from "react"
import NavBar from "../NavBar";
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import picture from '../../assets/images/photo-canteen.jpg';

const Home = () => {
  return (
    <div>

      <div className={styles.topBar}>
        <h4>Well done! less than 10% waste last week!</h4>
      </div>

      {/* <div className={styles.picture}>
        <img src={picture}></img>
      </div> */}

      <div className={styles.linkContainer}>
        <div className={styles.linkContainerOne}>
          <div className={styles.mealSelectionButton}>
            <Link to='/mealselection' >
              <h3>Meal Selection</h3>
              <img className='mealSelection'></img>
            </Link>
          </div>
        </div>
        <div className={styles.linkContainerTwo}>
          <div className={styles.aboutUs}>
            <Link to='/aboutus'>
            <h3>About Us / Environment</h3>
            <img className='aboutUs'></img>
            </Link>
          </div>
          <div className={styles.gamification}>
            <Link to='/gamification'>
              <h3>Gamification</h3>
              <img className='gamification'></img>
            </Link>
          </div>
        </div>
      </div>

      <div>
        {/* <NavBar /> */}
      </div>
    </div>
  );
};

export default Home;