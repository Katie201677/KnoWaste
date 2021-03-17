import React, {useState} from 'react';
import styles from './DailySelection.module.scss';
import RecipeList from './RecipeList';
import DayDateBar from './DayDateBar/DayDateBar.jsx';

const DailySelection = (props) => {
    const {date, setActiveDate, activeDate, action, mealDayData, getMealChoice} = props;

    // mealDiet is an array of dietary information e.g. meat, fish, vegan...
    // Need a mapping function to display each value in the array
    //  this function must be general as multiply mealData keys have arrays as values 
    
    

    // mealOption is an array with three objects. Each object is a meal option.
    // The meal option object keys are the bits of meal information display.
    const mealOptions = [{type: "meat", imgSrc: mealDayData[0].mealImage ,recipeName: mealDayData[0].mealName, dietaryrestriction: mealDayData[0].mealDiet}, 
                        {type: "fish", imgSrc: mealDayData[1].mealImage, recipeName: mealDayData[1].mealName, dietaryrestriction: mealDayData[1].mealDiet}, 
                        {type: "vegetarian", imgSrc: mealDayData[2].mealImage, recipeName: mealDayData[2].mealName, dietaryrestriction: mealDayData[2].mealDiet}]
    
    const meal = mealOptions.map(meal => {
        return meal
      })

    const [isSelected, setIsSelected] = useState(false);
    const [activeMeal, setActiveMeal] = useState("");
    
    const getActiveMeal = (recipeName) => {
        getMealChoice(recipeName);
        return setActiveMeal(recipeName);
    }
    const selectItem = () => {
        return setIsSelected(true);
    }
  
    return (
        <div className={styles.dailySelection}>
            <DayDateBar date={date} setActiveDate={setActiveDate} activeDate={activeDate} isSelected={isSelected} activeMeal={activeMeal} action={action}/>
            {
                activeDate === date ? <RecipeList meal={meal} action={action}  selectItem={selectItem} getActiveMeal={getActiveMeal}/> : ""
            }
        </div>
    )
}

export default DailySelection