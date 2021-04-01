import React, { useState, useEffect } from "react";
import styles from "./Timer.module.scss";
import { DateTime } from "luxon";

//USE THESE VARIABLES TO DEFINE DEADLINE
// Luxon is not zero indexed, so Monday is equal to 1, Friday is equal to 5, so to get to Friday we add 4 days.
let days = 4;
let hours = 18;
const now = () => DateTime.local();

//Timer exported for testing
export const setDeadline = (days, hours) => {
  let deadlineThisWeek = DateTime.local()
    .startOf("week")
    .plus({ days: days, hours: hours }); //Friday at 6pm
  if (deadlineThisWeek.weekday <= now().weekday) {
    let deadline =
      deadlineThisWeek.hour >= 18
        ? deadlineThisWeek.plus({ days: deadlineThisWeek.weekday })
        : deadlineThisWeek;
    return deadline;
  } else {
    let deadline = deadlineThisWeek;
    return deadline;
  }
};

//Time is the parameter we need to pass to mock for testing.
export const getTimeDifference = (time, days, hours) => {
  let upcomingDeadline = setDeadline(days, hours);
  let diff = upcomingDeadline.diff(time, [
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds",
  ]);
  if (diff.hours < 0 && diff.days < 0){
    let diffOffset = diff.plus({days: 7, hours: 24 - hours})
    return diffOffset.values
  } else {
  return diff.values;
}
};

export const lessThanSixHours = (days, hours) =>
  days == 0 && hours < 6 ? true : false;
//The Timer component

const Timer = () => {
  const [timeLeftStr, setTimeLeft] = useState("");
  const [isTimerRunout, setIsTimerRunout] = useState(false);
  const [isRed, setRed] = useState(false);

  const getTimeDifference = () => {
    let upcomingDeadline = setDeadline(days, hours);
    const diff = upcomingDeadline.diff(now(), [
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds",
    ]);
    if (diff.hours < 0 && diff.days < 0){
      let diffOffset = diff.plus({days: 7, hours: 24 - hours})
      return diffOffset.values
    } else {
    return diff.values;
  }
};

  const timerStyling = (d, h, m, s) => {
    let hours = h > 1 ? `${h} hours` : `${h} hour`;
    let days = d > 1 ? `${d} days` : `${d} day`;
    let minutes = m > 1 ? `${m} minutes` : `${m} minute`;
    return d > 0
      ? `${days}`
      : `${hours}
             ${minutes}
             ${s}s`;
  };

  useEffect(() => {
    let myInterval = setInterval(() => {
      const diff = getTimeDifference();
      let { days, hours, minutes, seconds } = diff;
      setRed(lessThanSixHours(days, hours));
      timerStyling();
      if (minutes === 0 && seconds === 0) {
        setIsTimerRunout(true);
      } else {
        setIsTimerRunout(false);
      }
      setTimeLeft(timerStyling(days, hours, minutes, seconds));
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <div className={`${styles.timer} textwhite box-style-1 `}>
      {isTimerRunout ? null : (
        <h2 className={isRed ? "textred" : "textwhite"}>
          {timeLeftStr} until orders close on Friday at 6pm
        </h2>
      )}
    </div>
  );
};

export default Timer;
