import React from 'react';
import styles from "./DayPlannerForm.module.scss";


const DayPlannerForm = (props) => {
  const day = props.day;
  const register = props.register;
  const  meals  = props.meals;

  // const mealOptions = meals.map((meal) => {
  //    return <option value="meal" key={meal}>{mealOptions}</option>
  //  })


  return (
    <div key={day} className={styles.formSection}>
      
      <div>
            <h3>Option 1</h3>
          
            <select name={`${day}Meal1`} ref={register}>
              {meals.map((meal) => {
                  return <option value={meal} key={meal}>{meal}</option>
                })
              }
             
            </select>
          </div>
          <div>
            <h3>Option 2</h3>
            <select name={`${day}Meal2`} ref={register}>
              {meals.map((meal) => {
                  return <option value={meal} key={meal}>{meal}</option>
                })
              }
             
            </select>
          </div>
        <div>
          <h3>Option 3</h3>
          <select name={`${day}Meal3`} ref={register}>
              {meals.map((meal) => {
                  return <option value={meal} key={meal}>{meal}</option>
                })
              }
             
            </select>
        </div>
    </div>
  )
}

export default DayPlannerForm
