import React from 'react'
import kitchenImage from '../../assets/cafe.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from '../../data/fa-library.js';
import styles from './MealConfirmation.module.scss';


const MealConfirmation = () => {
    return (
        <main style={{backgroundImage: `url(${kitchenImage})`
  }}>
            <div className={styles.mainDiv}>
                <h1>Your Meal Choices</h1>
                <section className={styles.confirmMenu}>
                    <ul>
                        <li>
                            <span className={styles.dot}>
                                <h3>Monday</h3>
                            </span>
                            
                            <span className={styles.mealOption}>
                                <p>Yummy Monday Dinner</p>
                                {/* Allergen symbols */}
                                <FontAwesomeIcon icon="pen"/>
                            </span>
                            
                        </li>
                        <li>
                            <h3>Tuesday</h3>
                            <span className={styles.mealOption}>
                                <p>Yummy Tuesday Dinner</p>
                                {/* Allergen symbols */}
                                <FontAwesomeIcon icon="pen"/>   
                            </span>
                            
                        </li>
                        <li>
                            <h3>Wednesday</h3>
                            <span className={styles.mealOption}>
                                <p>Yummy Wednesday Dinner</p>
                                {/* Allergen symbols */}
                                <FontAwesomeIcon icon="pen"/>
                            </span>
                            
                        </li>
                        <li>
                            <h3>Thurdsday</h3>
                            <span className={styles.mealOption}>
                                <p>Yummy Thursday Dinner</p>
                                {/* Allergen symbols */}
                                <FontAwesomeIcon icon="pen"/>
                            </span>   
                        </li>
                        <li>
                            <h3>Friday</h3>
                            <span className={styles.mealOption}>
                                <p>you have to go to TGI Fridays on Fridays it is law.</p>
                                {/* Allergen symbols */}
                                {/* Edit Button */}
                                <FontAwesomeIcon icon="pen"/>
                            </span>
                            
                        </li>
                    </ul>
        
                </section>
                <button>CHECKOUT</button>
            </div>
        </main>
    )
}

export default MealConfirmation;


