import React from 'react';
import styles from './DailyOrdersSummary.module.scss';
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

  const text = keysArray.reverse().map(key => {
    console.log('help');
    // return `${key}  ${mealObj[key]} `
    return [key, mealObj[key]]

  })

  return (
    // <table>
    //       <tr>
    //             <th>Day of the week</th>
    //             <th>Meal Option 1</th>
    //             <th>Meal Option 2</th>
    //             <th>Meal Option 3</th>
    //       </tr>
    //       <tr> 
    //         <td>
    //         {text[0]}
    //       </td>
    //       <td>
    //         {text[1]}
    //       </td>
    //       <td>
    //         {text[2]}
    //       </td>
    //       <td>
    //         {text[3]}
    //       </td>
    //     </tr>
    // </table>

    <div className ="box-style-1"> 
      <div className ={styles.dayOfWeek}>
          {text[0][1]}
      </div>
      <div className = "box-style-2">
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

