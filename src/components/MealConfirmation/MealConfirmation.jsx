import React from 'react'
import kitchenImage from '../../assets/cafe.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from '../../data/fa-library.js';
import styles from './MealConfirmation.module.scss';


const MealConfirmation = () => {
    return (
        <main style={{backgroundImage: `url(${kitchenImage})`
  }}>
            <div className="mainDiv">
                <h1>Your Meal Choices</h1>
                <section className="confirmMenu">
                    <ul>
                        <li>
                            <span className="dot"></span>
                            <h3>Monday</h3>
                            <p>Yummy Monday Dinner</p>
                            {/* Allergen symbols */}
                            <FontAwesomeIcon icon="pen"/>
                        </li>
                        <li>
                            <h3>Tuesday</h3>
                            <p>Yummy Tuesday Dinner</p>
                            {/* Allergen symbols */}
                            <FontAwesomeIcon icon="pen"/>
                        </li>
                        <li>
                            <h3>Wednesday</h3>
                            <p>Yummy Wednesday Dinner</p>
                            {/* Allergen symbols */}
                            <FontAwesomeIcon icon="pen"/>
                        </li>
                        <li>
                            <h3>Thurdsday</h3>
                            <p>Yummy Thursday Dinner</p>
                            {/* Allergen symbols */}
                            <FontAwesomeIcon icon="pen"/>
                        </li>
                        <li>
                            <h3>Friday</h3>
                            <p>you have to go to TGI Fridays on Fridays it is law.</p>
                            {/* Allergen symbols */}
                            {/* Edit Button */}
                            <FontAwesomeIcon icon="pen"/>
                        </li>
                    </ul>
                </section>
                <button>CHECKOUT</button>
            </div>
        </main>
    )
}

export default MealConfirmation;


