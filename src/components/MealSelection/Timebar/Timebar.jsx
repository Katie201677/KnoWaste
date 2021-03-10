import React, { useState, useEffect } from 'react'
import styles from './TimeBar.module.scss'
import { DateTime } from 'luxon';

const TimeBar = () => {

  const [timeLeftStr, setTimeLeft] = useState("");
  const [isTimerRunout, setIsTimerRunout] = useState(false);

  const getTimeDifference = () => {
    // 1. Get current date for comparison with upcoming friday
    const now = DateTime.now();
    // 2. Get the upcoming friday
    const upcomingFriday = DateTime.local().startOf('week').plus({days: 5});
    // 3. Do the comparison to get the remaining time
    const diff = upcomingFriday.diff(now, ["days", "hours", "minutes", "seconds", "milliseconds"])
    return diff.values
  } 

  useEffect(() => {
    let myInterval = setInterval(()=>{
      const diff = getTimeDifference();
      let{days, hours, minutes, seconds} = diff;
      if (minutes === 0 && seconds === 0) {
        setIsTimerRunout(true);
      } else {
        setIsTimerRunout(false);
      }
      setTimeLeft(` ${days} Days ${hours}:${minutes}:${seconds}`)
    }, 1000)
    return ()=> {
      clearInterval(myInterval);
    };
  }, []);
  
  return (
    <div className={styles.timeBar}>
      { isTimerRunout? null
            : <h2>{timeLeftStr} <span>until orders close</span></h2> 
        }
    </div>
  )
}

export default TimeBar
