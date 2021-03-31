import React, { useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentWeekID } from "../../services/weekid.service.js"
import library from "../../data/fa-library.js";
import styles from "./MealConfirmation.module.scss";
import MealCard from "./MealCard";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { firestore } from '../../firebase';
import { UserContext } from "../../context/contextUser";



const MealConfirmation = (props) => {

  // <div className='content'>
  //     <NavBar />
  //     <HelpPopUp />
  //     <Timer className={styles.timerMealConfirm}/>
  //     <main>
  //       <div className={`mainSection ${styles.mealConfirmLayout}`}>
  //         <div className={styles.milkyBackground}></div>
  //         <div className={`box-style-1 ${styles.mealConfirmMilky}`}>
  //           <h1 className = {styles.mealConfirmTitle}>Your Meal Choices</h1>
            
  //           <div className={styles.mealConfirmBox}>
  //             <section className={styles.confirmMenu}>
  //               {days.map((day) => {
  //                  let i = days.indexOf(day);
  //                    return (
  //                      <>
  //                       <MealCard day={day} meal={props.mealChoiceArr[i]} clearArr={props.clearArr} />
  //                     </>
  //                   )
  //                 })
  //               }
  //             </section>
  //             <Link to="/home">
  //               <button className={`button-style-1 ${styles.mealConfirmationButton}`} onClick={handleSubmit}>CHECKOUT</button>
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </main>
  //   </div>


  console.log(props.mealChoiceArr);

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

  const getUserMeals = () => {
    let weekId = getCurrentWeekID();
    firestore.collection('orders').doc("SQ3lfemjbohTZpKxAjTghX6qEo73")
      .get().then(
      response => {
        const userOrder = response.data();
        let orderArr = userOrder[weekId];
        console.log(orderArr)
      }
      // within this doc of chosen user
      //  we need to find the correct object which has the key value pair of this week
      //  we then want to get the array ( the value )
      // and then map this onto the page 
      //  thank u!! xx
    );
  }

  return (
  <>
    <button onClick={() => getUserMeals()}></button>  
  </>  
  );
};

export default MealConfirmation;
