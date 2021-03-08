import React from 'react';
import PropTypes from 'prop-types';
import styles from './DailySelection.module.scss';
import RecipeList from './RecipeList';
import DayDateBar from './DayDateBar/DayDateBar.jsx';

const DailySelection = (props) => {
    const {date, setActiveDate, activeDate, action} = props;

    return (
        <div className={styles.dailySelection}>
            <DayDateBar date={date} setActiveDate={setActiveDate} activeDate={activeDate} />
            {activeDate === date ? <RecipeList action={action}/> : ""}
            
        </div>
    )
}

export default DailySelection