import React from "react";
import kitchenImage from "../../assets/cafe.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from "../../data/fa-library.js";
import styles from "./MealConfirmation.module.scss";
import MealCard from "./MealCard";

const MealConfirmation = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  return (
    <main style={{ backgroundImage: `url(${kitchenImage})` }}>
      
      <div className={styles.mainDiv}>
      
        <h1>Your Meal Choices</h1>
        <section className={styles.confirmMenu}>
          {
            <ul>
              {days.map((day) => (
                <>
                  <MealCard day={day} meal="Yummy meal" />
                </>
              ))}
            </ul>
          }
        </section>
        <button>CHECKOUT</button>
      </div>
    </main>
  );
};

export default MealConfirmation;
