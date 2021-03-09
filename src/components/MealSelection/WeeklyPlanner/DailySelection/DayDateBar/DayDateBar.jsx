import React from 'react';
import styles from './DayDateBar.module.scss';

const DayDateBar = (props) => {
    const {date, setActiveDate, activeDate, isSelected, activeMeal, action} = props;


    const openDaySelection = () => {
        setActiveDate(date);
    }

    return (
        <div className={styles.dayBar}>
            <h2><button className={styles.daySelector} onClick={openDaySelection}> {">"} </button> {date}</h2>
            <button className={styles.btn}>Skip Meal</button>
                date == activeDate ? <button className={styles.btn} onClick={action}>SKIP THE MEAL</button> : ""
            {   
               isSelected == true ? <h5>{activeMeal}</h5> : ""
           }  
           {console.log("activeMeal",activeMeal)}
        </div>
    )
}
export default DayDateBar
