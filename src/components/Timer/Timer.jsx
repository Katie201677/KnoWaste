import React, {useState,  useEffect} from "react";
import styles from "./Timer.module.scss";
import {DateTime} from "luxon";

//USE THESE VARIABLES TO DEFINE DEADLINE
<<<<<<< HEAD
// Luxon is not zero indexed, so Monday is equal to 1, Friday is equal to 5, so to get to Friday we add 4 days.
let days = 4;
let hours = 18;
const now = () => DateTime.local();
=======
// monday : 0, tuesday: 1...
>>>>>>> 33efafe4c27e8e0b664071c03b85693eda3a38b9

let weekDay = 4;  //Friday
let hours = 18;   //6 PM

const setDeadline = (weekDay,hours) =>{
  const now = DateTime.now().setLocale("uk");
  let deadline = DateTime.now().startOf("week")
    .plus({
      days : weekDay,
      hours: hours
    });
  if (now > deadline) {
    deadline = deadline.plus({days: 7});
  }
  return deadline;
}

const formatUnit = (num,str) => {
  switch (num) {
    case 0:
      return "";
    case 1:
      return `${num} ${str}`;
    default:
      return `${num} ${str}s`;
  }
}

// format remaining time
const formatDuration = (duration) => {
  const days = formatUnit(duration.days, "day");
  const mins = formatUnit(duration.minutes, "minute");
  const hours = formatUnit(duration.hours, "hour");
  const secs = formatUnit(parseInt(duration.seconds), "second");
  //different fomat based on remaining time
  if (duration.days > 0) {
    return `${days} and ${hours}`;
  } else {
    return `${hours} ${mins} ${secs}`;
  }
}
//format deadline to - Monday, 5PM
const formatDeadline = (date)=> {
  return date.toLocaleString({ weekday: 'long', hour:'numeric' ,hour12: true});
}

//The Timer component
const Timer = () => {

  //deadline definition
  const [timeLeftStr, setTimeLeftStr] = useState("");
  const [isRed, setRed] = useState(false);

  useEffect(() => {
    //set dealine onMount
    const deadline = setDeadline(weekDay, hours);
    //display timeToDeadline onMount
    const timeToDeadline = deadline.diffNow(['days', 'hours', 'minutes','seconds']);
    setTimeLeftStr(`${formatDuration(timeToDeadline)} until ${formatDeadline(deadline)}`);
  
    //set update timer every second
    let myInterval = setInterval(() => {
      setRed(timeToDeadline.days === 0 && timeToDeadline.hours < 6);
      setTimeLeftStr(`${formatDuration(timeToDeadline)} until ${formatDeadline(deadline)}`);
    }, 1000);
    // clear intervall onUnmount
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <div className = {`${styles.timer} textwhite box-style-1`}>
      <h2 className = {isRed ? "textred" : "textwhite"}>
        {timeLeftStr}
      </h2>
    </div>
  );
};

export default Timer;