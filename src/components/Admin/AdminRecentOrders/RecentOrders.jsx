import React, { useState, useEffect } from 'react'
import { storage, firestore } from "../../../firebase";
import { getNextWeekID, getCurrentWeekID } from "../../../services/weekid.service";
import DailyOrdersSummary from "./DailyOrdersSummary";
import styles from './RecentOrders.module.scss';
import AdminNavBar from "../AdminNavBar";

// OPTION: React tables -> https://react-table.tanstack.com/docs/quick-start

// This page will show the weeks orders -> ideally to print out for use
// display: 
// 
//        Date/week
//        Monday:   id1       id2       id3       skipped    Total
// Num of orders:   34         45        64          12       135
//        -------
//       Tuesday: 

// options 1,2 and 3 can be the meal ID'2 or meal titles
// Total should be the same each week &&  == number of students in hall

// STEPS:
// 1. import the id for next weeks (current weeks meal order options) meals e.g. 210322
// 2. Orders data is in collection: "orders" and map through that (map through each user)
// 3. when you're on each user, find the object with the name of the current week id.
// 4. Extract the meal id from each day in this weeks meal object.
//    - this data is put in an array.
//    - 
// 
// 
// 
// end Point: 
// Table 7 x 3, each day has 3 options

const RecentOrders = () => {

  // 1. get the weeks id
  const nextWeekId = getNextWeekID();
  const currentWeekId = getCurrentWeekID();
  const weekId = nextWeekId;
  console.log(weekId);

  const [meal, setMeal] = useState([]);

  // Empty arrays to store the meal choices
  const monday = [];  /* monday array for monday's meal choices */
  const tuesday = [];
  const wednesday = [];
  const thursday = [];
  const friday = [];
  const saturday = [];
  const sunday = [];

  // useState for rendering data once loaded
  const [isLoaded, setIsLoaded] = useState(false);

  // this function takes the total orders array for a day and returns an object with keys of the mealId's and values of the number of times it was 
  const mealCount = (daily)=>  {
    let array_elements = daily;
    array_elements.sort();
    console.log(array_elements);
    let results = {};
    var current = null;
    var count = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (count > 0) {
                results[current] = count;
                // document.write(current + ' comes --> ' + count + ' times<br>');
            }
            current = array_elements[i];
            console.log(`i am current ${current}`);
            count = 1;
        } else {
            count++;
        }
        results[current] = count;
    }
    return results
  }

  // get the data from firestore
 
  const mealOrders = () => {
    firestore.collection('orders').get().then(result => {
    result.docs.forEach(doc => {
    
    // week is a users meal options for the week
    let week = doc.data()[currentWeekId];
    if (week === undefined) {
      console.log("error: user has not selected");
      return;
    } else {
        console.log(week);
        monday.push(week[0]);
        tuesday.push(week[1]);
        wednesday.push(week[2]);
        thursday.push(week[3]);
        friday.push(week[4]);
        saturday.push(week[5]);
        sunday.push(week[6]);
    } 
    })}).then( response => {
      // console.log(mealCount(monday));
      // console.log(mealCount(tuesday));
      // console.log(mealCount(wednesday));
      // console.log(mealCount(thursday));
      // console.log(mealCount(friday));
      // console.log(mealCount(saturday));
      // console.log(mealCount(sunday));
    
      let mondayObj = mealCount(monday);
      mondayObj.day = 'Monday';
      let tuesdayObj = mealCount(tuesday);
      tuesdayObj.day = 'Tuesday';
      let wednesdayObj = mealCount(wednesday);
      wednesdayObj.day = 'Wednesday';
      let thursdayObj = mealCount(thursday);
      thursdayObj.day = 'Thursday';
      let fridayObj = mealCount(friday);
      fridayObj.day = 'Friday';
      let saturdayObj = mealCount(saturday);
      saturdayObj.day = 'Saturday';
      let sundayObj = mealCount(sunday);
      sundayObj.day = 'Sunday';

      const mealArray = [];

      mealArray.push(mondayObj);
      mealArray.push(tuesdayObj);
      mealArray.push(wednesdayObj);
      mealArray.push(thursdayObj);
      mealArray.push(fridayObj);
      mealArray.push(saturdayObj);
      mealArray.push(sundayObj);

      setMeal(mealArray);
      setIsLoaded(true);
    })
  
  }

  useEffect(() => {
    mealOrders()
  },[]);


  return (
    <div className='content'>
      <div className={styles.AdminNavBar} >
      <AdminNavBar />
      </div>
      <div className='mainSection'>
        {
          isLoaded ? meal.map((day, i) => <DailyOrdersSummary key={i} mealObj={day} />) : "..loading"
        }
      </div>
    </div>
  )
}

export default RecentOrders;
