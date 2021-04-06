import React from 'react';
import styles from './DailyOrdersSummary.module.scss';
// this component takes the meal data for a single day and displays it
// Parameters:
//  - Object -> keys are meal id's, values are number of orders of that meal id

const DailyOrdersSummary = (props) => {

  const mealObj = props.mealObj;

  // get the keys (meal id's) from the object and store in array
  const keysArray = Object.keys(mealObj);
  const text = keysArray.reverse().map(key => {
    console.log('help');
    return [key, mealObj[key]]
  })

  return (
    <div className ="box-style-1"> 
      <div className ={styles.dayOfWeek}>
          {text[0][1]}
      </div>
      <div className={"box-style-2 " + styles.selectionContainer}>
        <div>
          {text[1][0]}: {text[1][1]}
        </div>
        <div>
          {text[2] === undefined ? 'None Selected' : `${text[2][0]}: ${text[2][1]}`}
        </div>
        <div>
          {text[3] === undefined ? 'None Selected' : `${text[3][0]}: ${text[3][1]}`}
        </div>
      </div>
    </div>
    
  )
}

export default DailyOrdersSummary

