import React from 'react'
import styles from './DayDateBar.module.scss';

const DayDateBar = (props) => {
    const {date, activeDate, isSelected, activeMeal, action, getActiveMeal} = props;
    const handleClick = () => {
        action()
        getActiveMeal("No Meal")
    }
    
    return (
        <div  className={ date === activeDate ? styles.diffColour : styles.dayBar}  >
            <h2>{date}</h2>
            {
                date === activeDate ? <button className={styles.btn} onClick={handleClick}> SKIP THE MEAL</button> : ""
            }
            {   
               isSelected ? <h5>{activeMeal}</h5> : ""
           }  
        </div>
    )
}
export default DayDateBar