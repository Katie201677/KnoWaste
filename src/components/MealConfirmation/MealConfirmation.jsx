import React from 'react'
import kitchenImage from '../../assets/cafe.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from '../../data/fa-library.js';
import styles from './MealConfirmation.module.scss';
import MealCard from './MealCard'


const MealConfirmation = () => {
  const days = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday"];
    return (
        <main style={{backgroundImage: `url(${kitchenImage})`
  }}>
    <h1>Your Meal Choices</h1>
            <div className={styles.mainDiv}>
            
                <section className={styles.confirmMenu}>
                  {
                    days.map(day =>(
                    <>
                      <MealCard day={day} meal="meal"/>
                    </>
                    ))
                  }
                   
        
                </section>
                <button>CHECKOUT</button>
            </div>
        </main>
    )
}

export default MealConfirmation;


