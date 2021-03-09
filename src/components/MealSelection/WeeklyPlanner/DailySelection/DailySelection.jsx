import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './DailySelection.module.scss';
import RecipeList from './RecipeList';
import DayDateBar from './DayDateBar/DayDateBar.jsx';

const DailySelection = (props) => {
    const {date, setActiveDate, activeDate, action} = props;

    const mealOptions = [{type: "meat", imgSrc:"https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-2.jpg" ,recipeName: "Roasted aubergine, lamb and feta tart", dietaryrestriction: ["gluten", "lactose"]}, 
                        {type: "fish", imgSrc:"https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-2.jpg", recipeName: "Smoked cheddar macaroni cheese", dietaryrestriction: ["nuts", "gluten", "lactose"]}, 
                        {type: "vegetarian", imgSrc:"https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-2.jpg", recipeName: "Vegan paella with roasted tofu", dietaryrestriction: ["nuts", "gluten"]}]
    
    const meal = mealOptions.map(meal => {
        return meal
      })

    const [isSelected, setIsSelected] = useState(false);
    const [activeMeal, setActiveMeal] = useState("");
    
    const getActiveMeal = (recipeName) => {
        return setActiveMeal(recipeName);
    }
    const selectItem = () => {
        return setIsSelected(true);
    }

    return (
        <div className={styles.dailySelection}>
            <DayDateBar date={date} setActiveDate={setActiveDate} activeDate={activeDate} isSelected={isSelected} activeMeal={activeMeal} action={action}/>
            {activeDate === date ? <RecipeList meal={meal} action={action} isSelected={isSelected} selectItem={selectItem} getActiveMeal={getActiveMeal} activeMeal={activeMeal}/> : ""}
            {console.log(isSelected)}
        </div>
    )
}

export default DailySelection