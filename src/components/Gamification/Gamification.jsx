import React, { useState, useEffect } from "react";
import { getUsersCarbon } from "../../services/gamification.service";
import styles from "./Gamification.module.scss";
import Navbar from "../NavBar";
import UserStats from "./UserStats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from "../../data/fa-library.js";

const Gamification = () => {
  const [sortedUsers, setSortedUsers] = useState([]);
  // sort data upon page load
  useEffect(() => {
   getUsersCarbon().then(response => {
     setSortedUsers(orderUsers(response))
   });
   // setSortedUsers(orderUsers(data));
   //setSortedUsers(data);
  }, []);
  // store the sorted halls data in state

  const tableHeadings = {
    userName: "Name",
    avgCarbon: "Average CO2",
    maxCarbon: "Total CO2",
    score: "Score",
  };

  // function takes the data as an input and return an ordered array based on the halls score
  const orderUsers = (data) => {
    let sortedData = data.sort((b, a) => b.maxCarbon - a.maxCarbon);
    return sortedData;
  };

  return (
    <div className={"content"}>
      <Navbar />

      <section className={`mainSection box-style-1 ${styles.main}`}>
        <div className={styles.gameHeader}>
          <FontAwesomeIcon icon="trophy" className={styles.iconStyle} />
          <h1 className={styles.gameTitle}>League Tables</h1>
        </div>
        <UserStats user={tableHeadings} position="Position" />
        {/* map over sorted data array for each user */}
        {/* mount HallStats component for each user in data array */}
        {/* position prop is the current users position in the sorted users array */}
        {sortedUsers.map((user, i) => {
          return <UserStats key={user.id} user={user} position={i} />;
        })}
      </section>
    </div>
  );
};

export default Gamification;
