import React from 'react'
import styles from './DayDateBar.module.scss';
import PropTypes from 'prop-types';

const DayDateBar = (props) => {
    const {date, setActiveDate, activeDate, isSelected, activeMeal, action} = props;


    const openDaySelection = () => {
        setActiveDate(date);
    }

    return (
        
        <div  className={ date == activeDate ? styles.diffColour : styles.dayBar}  >
            <h2>{date}</h2>
            {
                date == activeDate ? <button className={styles.btn} onClick={action}>SKIP THE MEAL</button> : ""
            }
            {   
               isSelected == true ? <h5>{activeMeal}</h5> : ""
           }  
           {console.log("activeMeal",activeMeal)}
        </div>
    )
}

export default DayDateBar
