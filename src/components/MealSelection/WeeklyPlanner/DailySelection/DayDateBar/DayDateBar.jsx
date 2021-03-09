import React from 'react'
import styles from './DayDateBar.module.scss';
import PropTypes from 'prop-types';

const DayDateBar = (props) => {
    const {date, activeDate, isSelected, activeMeal, action} = props;


    return (
        
        <div  className={ date == activeDate ? styles.diffColour : styles.dayBar}  >
            <h2>{date}</h2>
            {
                date == activeDate ? <button className={styles.btn} onClick={action}> SKIP THE MEAL</button> : ""
            }
            {   
               isSelected == true ? <h5>{activeMeal}</h5> : ""
           }  
        </div>
    )
}

export default DayDateBar
