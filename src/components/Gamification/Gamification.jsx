import React, { useState, useEffect } from 'react';
import styles from './Gamification.module.scss';
import Navbar from '../NavBar';
import HallStats from "./HallStats";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import library from '../../data/fa-library.js';

const Gamification = () => {

  // store the sorted halls data in state
  const [sortedHalls, setSortedHalls] = useState([]);

  // dummy data to use for now
  const data = [
    {
      name: "Hiat Baker",
      water: "123L",
      CO2: 4,
      score: 78
    },
    {
      name: "Orchard Heights",
      water: "125L",
      CO2: 3,
      score: 59
    },
    {
      name: "Wills",
      water: "145L",
      CO2: 5,
      score: 89
    }
  ];

  const tableHeadings = {
    name: "Hall",
    water: "Water",
    CO2: 'CO2',
    score: "Score"
  }

  // function takes the data as an input and return an ordered array based on the halls score
  const orderHalls = (data) => {
    let sortedData = data.sort((a, b) => b.score - a.score)
    return sortedData;
  }

  // sort data upon page load
  useEffect(() => {
    setSortedHalls(orderHalls(data));
  }, []);

  return (
    <div className={'content'}>
      
      <Navbar />
      
      <section className={'mainSection box-style-1'}>
        <div className={styles.gameHeader}>
          <FontAwesomeIcon  icon="trophy" className={styles.iconStyle}/>
          <h1 className={styles.gameTitle}>League Tables</h1>
        </div>
        <HallStats hall={tableHeadings} position='Position' />
        {/* map over sorted data array for each hall */}
        {/* mount HallStats component for each hall in data array */}
        {/* position prop is the current halls position in the sorted halls array */}
        {
          sortedHalls.map(hall => {
            return <HallStats key={hall.name} hall={hall} position={sortedHalls.indexOf(hall)}/>
          })
        }
      </section>
    </div>
  );
}

export default Gamification;

