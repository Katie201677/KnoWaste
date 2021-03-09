import React, {useState} from 'react';
import styles from './DailySelection.module.scss';
import RecipeList from './RecipeList';
import DayDateBar from './DayDateBar/DayDateBar.jsx';

const DailySelection = (props) => {
    const {date, setActiveDate, activeDate, action} = props;

    const mealOptions = [{type: "meat", imgSrc:"https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-2.jpg" ,recipeName: "Roasted aubergine, lamb and feta tart", dietaryrestriction: ["gluten", "lactose"]}, 
                        {type: "fish", imgSrc:"https://grilledcheesesocial.com/wp-content/uploads/2019/12/smoked-mac-and-cheese-grilled-cheese-social-9.jpg", recipeName: "Smoked cheddar macaroni cheese", dietaryrestriction: ["nuts", "gluten", "lactose"]}, 
                        {type: "vegetarian", imgSrc:"https://zardyplants.com/wp-content/uploads/2020/05/Vegan-Vegetarian-Spanish-Paella-02.jpg", recipeName: "Vegan paella with roasted tofu", dietaryrestriction: ["nuts", "gluten"]}]
    
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
            {
                activeDate === date ? <RecipeList meal={meal} action={action}  selectItem={selectItem} getActiveMeal={getActiveMeal}/> : ""
            }
        </div>
    )
}

export default DailySelection