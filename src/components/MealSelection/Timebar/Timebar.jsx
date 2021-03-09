import React, { useState, useEffect } from 'react'
import styles from './TimeBar.module.scss'
import { DateTime } from 'luxon';

const TimeBar = () => {
  const getNextFriday = () => {
    // 1. Get current date for comparison with upcoming friday
    const now = DateTime.now();
    // 2. Get the upcoming friday
    const upcomingFriday = DateTime.local().startOf('week').plus({days: 5});
    // 3. Do the comparison to get the remaining time
    const diff = upcomingFriday.diff(now, ["days", "hours", "minutes", "seconds", "milliseconds"])
    return diff.values
  } 
const countdown = getNextFriday()
let{days, hours, minutes, seconds} = countdown;
const [cddays, setDays] = useState(days);
const [cdhours, setHours]= useState(hours);
const [cdminutes, setMinutes] = useState(minutes);
const [cdseconds, setSeconds] = useState(seconds);

useEffect(() => {
  let myInterval = setInterval(()=>{
    if (seconds > 0) {
      setSeconds(seconds - 1);
    }
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(myInterval)
        if(hours === 0) {
          clearInterval(myInterval)
          if(days === 0) {
            clearInterval(myInterval)
          } else {
            setDays(days -1);
            setHours(23);
            setMinutes(minutes -1);
            setSeconds(seconds -1);
          }
        } else {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(seconds-1);
        }
       }else {
        setMinutes(minutes-1);
        setSeconds(59);
      }
    }
  }, 1000)
  return ()=> {
    clearInterval(myInterval);
  };
});
  
  return (
    <div className={styles.timeBar}>
      { minutes === 0 && seconds === 0
            ? null
            : <h1>{days} Days {hours}:{minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
    </div>
  )
}

export default TimeBar
