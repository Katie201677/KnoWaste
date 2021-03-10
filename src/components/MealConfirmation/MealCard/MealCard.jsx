import React from 'react'

const MealCard = (prop) => {
  return (
    <li>
      <h3>{prop.day}</h3>
      <p>{prop.meal}</p>
    </li>
  )
}

export default MealCard
