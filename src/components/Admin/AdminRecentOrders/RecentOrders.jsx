import React from 'react'
import { storage, firestore } from "../../../firebase";

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
  const weekId = 210322;

  const monday = [];  /* monday array for monday's meal choices */
  const tuesday = [];
  const wednesday = [];
  const thursday = [];
  const friday = [];
  const saturday = [];
  const sunday = [];


  // get the data from firestore
  firestore.collection('orders').get().then(result => {
    result.docs.forEach(doc => {
      
      // week is a users meal options for the week
      let week = doc.data()[weekId];
      monday.push(week[0]);
      tuesday.push(week[1]);
      wednesday.push(week[2]);
      thursday.push(week[3]);
      friday.push(week[4]);
      saturday.push(week[5]);
      sunday.push(week[6]);
    })
    
  }).then( response => {
    console.log(monday);
    console.log(tuesday);
    console.log(wednesday);
    console.log(thursday);
    console.log(friday);
    console.log(saturday);
    console.log(sunday);
  })

  


  return (
    <div>
      {monday}
    </div>
  )
}

export default RecentOrders;
