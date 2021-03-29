import jest from "jest";
import  { DateTime } from "luxon";
import { getTimeDifference, lessThanSixHours, setDeadline } from './Timer';
//Global variables to set up tests.
let deadlinedays = 4;
let deadlinehours = 18;
it ("Should return 2 hour difference for Friday @4pm", () => {
    // Arrange / Setup
    let time = DateTime.local().startOf('week').plus({days:4, hours: 16})
    // Act / Run the code
    const result = getTimeDifference(time, deadlinedays, deadlinehours);

    // Assert
    expect (result.hours).toBe(2);

})

it ("Should return 6h difference for Friday @6pm", () => {
    // Arrange / Setup
    let time = DateTime.local().startOf('week').plus({days: 4, hours: 18})
    // Act / Run the code
    const result = getTimeDifference(time, deadlinedays, deadlinehours);

    // Assert
    expect (result.hours).toBe(0);


})

it ("Should return 6d 2h difference for Saturday @10pm", () => {
    // Arrange / Setup
    let time = DateTime.local().startOf('week').plus({days:4, hours: 22})

    // Act / Run the code
    const result = getTimeDifference(time, deadlinedays, deadlinehours);

    // Assert
    expect (result).toStrictEqual({days:6,hours:8,minutes:0,seconds:0,milliseconds:0});
})

it ("Should be red text when the timer reaches 0 days and 5 hours", () => {
    let fridayObject = DateTime.local().startOf('week').plus({days: 4, hours: 22});
    const result = getTimeDifference(fridayObject);
    const testSixHoursOrLess = lessThanSixHours(result.days, result.hours)
    expect (testSixHoursOrLess).toBe(true)
})