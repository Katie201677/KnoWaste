import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentWeekID } from "../../services/weekid.service.js";
import library from "../../data/fa-library.js";
import styles from "./MealConfirmation.module.scss";
import MealCard from "./MealCard";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { firestore } from '../../firebase';
import { UserContext } from "../../context/contextUser";

let orderArr = [];

const MealConfirmation = () => {

  const handleSubmit = () => {
    console.log("submit success");
  };

  const {user} = useContext(UserContext);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [loading, setLoading] = useState(false);

  const getUserMeals = () => {
    let weekId = getCurrentWeekID();
    firestore.collection('orders').doc(user.uid)
      .get().then(
      response => {
        const userOrder = response.data();
        orderArr = userOrder[weekId];
        console.log(orderArr);
      }
    ).then(() => setLoading(true))
  }

  useEffect(() => {
    getUserMeals();
  }, [])

  return (
    <div className='content'>
      <NavBar />
      <main>
        <div className={`mainSection ${styles.mealConfirmLayout}`}>
          <div className={`box-style-1 ${styles.mealConfirmMilky}`}>
            <div className={styles.confirmTitle}>
              <h1 className = {styles.mealConfirmTitle}>Your Meal Choices</h1>
              <Link to="/mealselection">
                  <FontAwesomeIcon
                    icon="pen"
                    className='fa-3x'
                  />
              </Link>
            </div>
          {
            loading &&
            <div className={styles.mealConfirmBox}>
              <section className={styles.confirmMenu}>
                {
                  orderArr.map((order, i) => {
                    return (
                      <>
                        <MealCard day={days[i]} meal={order} />
                      </>
                    )
                  })
                }
              </section>
              <Link to="/home">
                <button className={`button-style-1 ${styles.mealConfirmationButton}`} onClick={handleSubmit}>CONFIRM</button>
              </Link>
            </div>
          }
          </div>
        </div>
      </main>
    </div>
  );
};

export default MealConfirmation;
