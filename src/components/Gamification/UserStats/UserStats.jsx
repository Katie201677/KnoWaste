import React from 'react';
import styles from './UserStats.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import library from '../../../data/fa-library';

// HallStats is a row for each hall in the table
// a hall gets passed in to this components as props and it renders them on the gamification page

const UserStats = (props) => {

  // deconstruct props for users object
  const user = props.user;
  const position = props.position;

  // to show number of car icons depending on CO2 value
  const icons = [];
  for (let i = 0; i<user.maxCarbon / 100; i++) {
    icons.push(<FontAwesomeIcon icon="car-side"/>)
  }
  
  return (
    <div className={user.avgCarbon === 'CO2' ? `box-style-2 ${styles.orange} ${styles.row}` : `box-style-2 ${styles.row}`}>

      {/* user position */}
      <p className={styles.entry}>{isNaN(position) ? "Position" : position + 1}</p>
      
      {/* arrow? how to display?? */}

      {/* user name */}
      <p className={styles.entry}>{user.userName}</p>

      {/* user average CO2 */}
      <p className={styles.entry}>
      {user.maxCarbon === 'CO2' ? 'CO2' : icons}
      </p>

      {/* user total CO2 */}
      <p className={styles.entry}>{user.maxCarbon}{isNaN(user.maxCarbon) ? '' : 'g'}</p>
    </div>
  )
}

export default UserStats;