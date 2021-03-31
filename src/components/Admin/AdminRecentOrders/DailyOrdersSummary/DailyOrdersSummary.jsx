import React from 'react';

// this component takes the meal data for a single day and displays it
// Parameters:
//  - Object -> keys are meal id's, values are number of orders of that meal id

const DailyOrdersSummary = (props) => {

  const mealObj = props.mealObj;
  console.log("this is meal object")
  console.log(mealObj);
  // get the keys (meal id's) from the object and store in array
  let keysArray = Object.keys(mealObj);
  console.log(keysArray);

  const text = keysArray.map(key => {
    console.log('help');
    return `${key}: ${mealObj[key]}`

  })

  return (
    <div> 
      {text}
    </div>
  )
}

export default DailyOrdersSummary

