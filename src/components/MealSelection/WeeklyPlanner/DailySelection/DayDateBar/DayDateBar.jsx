import React from 'react'
import styles from './DayDateBar.module.scss';

const DayDateBar = () => {
    return (
        <div className={styles.dayBar}>
            <h2>Monday 15/03</h2>
            <button>Skip Meal</button>
        </div>
    )
}

export default DayDateBar
