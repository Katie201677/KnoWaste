import React from 'react';
import styles from './DayDateBar.module.scss';

const DayDateBar = (props) => {
    const {date, setActiveDate, activeDate} = props;
    const openDaySelection = () => {
        setActiveDate(date);
    }

    return (
        <div className={styles.dayBar}>
            <h2><button className={styles.daySelector} onClick={openDaySelection}> {">"} </button> {date}</h2>
            <button className={styles.btn}>Skip Meal</button>
        </div>
    )
}

export default DayDateBar
