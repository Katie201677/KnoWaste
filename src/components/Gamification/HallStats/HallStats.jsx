import React from 'react';
import styles from './HallStats.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import library from '../../../data/fa-library';

// HallStats is a row for each hall in the table
// a hall gets passed in to this components as props and it renders them on the gamification page

const HallStats = (props) => {

  // deconstruct props for halls object
  const hall = props.hall;

  // to show number of car icons depending on CO2 value
  const icons = [];
  for (let i = 0; i<hall.CO2; i++) {
    icons.push(<FontAwesomeIcon icon="car-side"/>)
  }
  
  return (
    <div className={hall.CO2 === 'CO2' ? `box-style-2 ${styles.orange} ${styles.row}` : `box-style-2 ${styles.row}`}>

      {/* hall position */}
      <p className={styles.entry}>{props.position}</p>
      
      {/* arrow? how to display?? */}

      {/* hall name */}
      <p className={styles.entry}>{hall.name}</p>

      {/* hall water */}
      <p className={styles.entry}>{hall.water}</p>

      {/* hall CO2 */}
      <p className={styles.entry}>
      {hall.CO2 === 'CO2' ? 'CO2' : icons}
      </p>

      {/* hall overall score */}
      <p className={styles.entry}>{hall.score}%</p>
    </div>
  )
}

export default HallStats;