import React, { useEffect } from 'react';
import styles from "./DayPlannerForm.module.scss";
import { getAllMeals }  from "../../../../services/meals.service"

const DayPlannerForm = (props) => {
  const day = props.day;
  const register = props.register;

  useEffect( async ()=>
  {
    await  console.log(getAllMeals())
   
  },[])

  return (
    <div key={day} className={styles.formSection}>
      
      <div>
            <h3>Option 1</h3>
            <select name={`${day}Meal1`} ref={register}>
              <option value="meal1">meal1</option>
              <option value="meal2">meal2</option>
              <option value="meal3">meal3</option>
            </select>
          </div>
          <div>
            <h3>Option 2</h3>
            <select name={`${day}Meal2`} ref={register}>
              <option value="meal1">meal1</option>
              <option value="meal2">meal2</option>
              <option value="meal3">meal3</option>
            </select>
          </div>
        <div>
          <h3>Option 3</h3>
          <select name={`${day}Meal3`} ref={register}>
            <option value="meal1">meal1</option>
            <option value="meal2">meal2</option>
            <option value="meal3">meal3</option>
          </select>
        </div>
    </div>
  )
}

export default DayPlannerForm
