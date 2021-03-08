import React from 'react'
import styles from './DayDateBar.module.scss';

const DayDateBar = (props) => {
    const {date, setActiveDate, activeDate, isSelected, meal} = props;


    const openDaySelection = () => {
        setActiveDate(date);
    }

    return (
        <div className={styles.dayBar}>
            <h2><button className={styles.daySelector} onClick={openDaySelection}> {">"} </button> {date}</h2>
            {   
               isSelected == true ? <h2>{meal[0].recipeName}</h2> : <button className={styles.btn}>Skip Meal</button>
           } 
           {console.log("meal[0].recipeName",meal[0].recipeName)}
        </div>
    )
}

export default DayDateBar
