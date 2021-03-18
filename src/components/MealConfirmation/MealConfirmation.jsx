import React from "react";
import kitchenImage from "../../assets/cafe.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from "../../data/fa-library.js";
import styles from "./MealConfirmation.module.scss";
import MealCard from "./MealCard";
import { Link } from 'react-router-dom'

const MealConfirmation = (props) => {
  
  console.log(props.mealChoiceArr);
  
  const handleSubmit = () => {
    console.log("submit success")
  }

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return (
    <main style={{ backgroundImage: `url(${kitchenImage})` }}>
      
      <div className={styles.mainDiv}>
        <div className = {styles.milkyBackground}></div>
        <h1>Your Meal Choices</h1>
        
        <Link to="mealselection">
         <FontAwesomeIcon onClick={props.clearArr} icon="pen" className={styles.penIcon} />
        </Link>

        <section className={styles.confirmMenu}>
          {
            <ul>
              {days.map((day) => {
                let i = days.indexOf(day);
                  return (
                    <>
                      <MealCard day={day} meal={props.mealChoiceArr[i]}  />
                    </>
                  )
                })
              }
            </ul>
          }
        </section>
        <Link to="/">
          <button className="confirmationButton" onClick={handleSubmit}>CHECKOUT</button>
        </Link>
      </div>
    </main>
  );
};

export default MealConfirmation;
