import { DateTime } from 'luxon';

export const getCurrentWeekID = () => {
    const date = DateTime.now()
    const day_of_week = DateTime.now().weekday - 1

    const lastMonday = date.minus({ days: day_of_week });
    
    const day = lastMonday.day.toString().padStart(2, '0')
    const month = lastMonday.month.toString().padStart(2, '0')
    const year = lastMonday.year.toString().slice(2)

    const currentId = [year, month, day].join('')
    
    return currentId
}


export const getNextWeekID = () => {
    const date = DateTime.now()
    const day_of_week = DateTime.now().weekday - 1 
    const lastMonday = date.minus({ days: day_of_week });
    const nextMonday = lastMonday.plus({ days: 7 })
    
    const day = nextMonday.day.toString().padStart(2, '0')
    const month = nextMonday.month.toString().padStart(2, '0')
    const year = nextMonday.year.toString().slice(2)

    const nextWeekId = [year, month, day].join('')
    
    return nextWeekId
}

export const getIDFromYYYYMMDD = (ISOdate) => {
    //Date must be supplied as YYYYMMDD for this function to return ID

    const date = DateTime.fromISO(ISOdate)
    const day_of_week = date.weekday - 1

    const lastMonday = date.minus({ days: day_of_week });
    
    const day = lastMonday.day.toString().padStart(2, '0')
    const month = lastMonday.month.toString().padStart(2, '0')
    const year = lastMonday.year.toString().slice(2)

    const currentId = [year, month, day].join('')
    
    return currentId
}