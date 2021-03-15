import React, { useState, useEffect } from 'react'
import styles from './Timer.module.scss'
import { DateTime } from 'luxon';

export const getTimeDifference = (time) => {
  // 1. Get current date for comparison with upcoming friday
  // const now = DateTime.now();
  // 2. Get the upcoming friday
  const upcomingFriday = 
   (time.weekday <= 5) ? DateTime.local().startOf('week').plus({days: 5}): 
                         DateTime.local().startOf('week').plus({days: 12});
  // 3. Do the comparison to get the remaining time
  const diff = upcomingFriday.diff(time, ["days", "hours", "minutes", "seconds", "milliseconds"])
  return diff.values
} 

const Timer = () => {

  const [timeLeftStr, setTimeLeft] = useState("");
  const [isTimerRunout, setIsTimerRunout] = useState(false);

 

  useEffect(() => {
    let myInterval = setInterval(()=>{
      const diff = getTimeDifference();
      let{days, hours, minutes, seconds} = diff;
      if (minutes === 0 && seconds === 0) {
        setIsTimerRunout(true);
      } else {
        setIsTimerRunout(false);
      }
      setTimeLeft(` ${days} Days ${hours}h ${minutes}min ${seconds}sec`)
    }, 1000)
    return ()=> {
      clearInterval(myInterval);
    };
  }, []);
  
  return (
    <div className={styles.Timer}>
      { isTimerRunout? null
            : <h2>{timeLeftStr} <span>until orders close</span></h2> 
        }
    </div>
  )
}

export default Timer;
