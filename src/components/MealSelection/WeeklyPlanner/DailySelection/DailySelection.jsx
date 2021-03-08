import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './DailySelection.module.scss';
import RecipeList from './RecipeList';
import DayDateBar from './DayDateBar/DayDateBar.jsx';

const DailySelection = (props) => {
    const {date, setActiveDate, activeDate, action} = props;

    const mealOptions = [{type: "meat", recipeName: "Chicken Tikka Masala", dietaryrestriction: ["nuts", "gluten", "lactose"]}, {type: "fish", recipeName: "I am a fish", dietaryrestriction: ["nuts", "gluten", "lactose"]}, {type: "vegetarian", recipeName: "A single brocolli", dietaryrestriction: ["nuts", "gluten", "lactose"]}]
    const meal = mealOptions.map(meal => {
        return meal
      })

    const [isSelected, setIsSelected] = useState(false);
    const selectItem = () => {
        return setIsSelected(true);
    }

    return (
        <div className={styles.dailySelection}>
            <DayDateBar meal={meal} date={date} setActiveDate={setActiveDate} activeDate={activeDate} isSelected={isSelected} />
            {activeDate === date ? <RecipeList meal={meal} action={action} isSelected={isSelected} setIsSelected={setIsSelected} selectItem={selectItem}/> : ""}
            {console.log(isSelected)}
        </div>
    )
}

export default DailySelection