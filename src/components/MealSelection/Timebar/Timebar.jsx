import React from 'react'
import styles from './TimeBar.module.scss'
import { DateTime } from 'luxon';

const TimeBar = () => {
  const now = DateTime.local().toString();
  
  return (
    <div className={styles.timeBar}>
      <p>{now} + until the ordering stops</p>
    </div>
  )
}

export default TimeBar
