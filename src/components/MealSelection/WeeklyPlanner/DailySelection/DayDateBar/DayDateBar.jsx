import React from 'react';
import styles from './DayDateBar.module.scss';

const DayDateBar = (props) => {
<<<<<<< HEAD
    const {date, setActiveDate, activeDate} = props;
=======
    const {date, setActiveDate, activeDate, isSelected, activeMeal, action} = props;


>>>>>>> d74ec12babb2189ed574582dfbc3b1e598a48700
    const openDaySelection = () => {
        setActiveDate(date);
    }

    return (
<<<<<<< HEAD
        <div className={styles.dayBar}>
            <h2><button className={styles.daySelector} onClick={openDaySelection}> {">"} </button> {date}</h2>
            <button className={styles.btn}>Skip Meal</button>
=======
        
        <div  className={ date == activeDate ? styles.diffColour : styles.dayBar}  >
            <h2>{date}</h2>
            {
                date == activeDate ? <button className={styles.btn} onClick={action}>SKIP THE MEAL</button> : ""
            }
            {   
               isSelected == true ? <h5>{activeMeal}</h5> : ""
           }  
           {console.log("activeMeal",activeMeal)}
>>>>>>> d74ec12babb2189ed574582dfbc3b1e598a48700
        </div>
    )
}

export default DayDateBar
