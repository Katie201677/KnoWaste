import React from 'react';
import styles from './DailySelection.module.scss';
import RecipeList from './RecipeList';
import DayDateBar from './DayDateBar/DayDateBar.jsx';

const DailySelection = () => {
    return (
        <div className={styles.dailySelection}>
            <DayDateBar />
            <RecipeList />
        </div>
    )
}

export default DailySelection