import jest from "jest";
import  { DateTime } from "luxon";
import { getTimeDifference } from './Timer';

it ("Should return 8 hour difference for Friday @4pm", () => {
    // Arrange / Setup
    const fridayObject = DateTime.local().startOf('week').plus({days: 4, hours: 16})

    // Act / Run the code
    const result = getTimeDifference(fridayObject);

    // Assert
    expect (result.hours).toBe(8);

})

it ("Should return 6h difference for Friday @6pm", () => {
    // Arrange / Setup
    let fridayObject = DateTime.local().startOf('week').plus({days: 4, hours: 18})

    // Act / Run the code
    const result = getTimeDifference(fridayObject);

    // Assert
    expect (result.hours).toBe(6);


})

it ("Should return 6d 2h difference for Saturday @10pm", () => {
    // Arrange / Setup
    let fridayObject = DateTime.local().startOf('week').plus({days: 5, hours: 22})

    // Act / Run the code
    const result = getTimeDifference(fridayObject);

    // Assert
    expect (result).toStrictEqual({days:6,hours:2,minutes:0,seconds:0,milliseconds:0});


})