import React from 'react'

const RecipeCard = (props) => {
  //Each individual recipe information in a card format.
  const {type, recipeName, dietaryrestriction} = props.mealChoice;
  return (
    <div>
      <section>
        <img src="" alt={type}/>
        <h3>{recipeName}</h3>
      </section>
      <section>
       <p>{dietaryrestriction.join(" ")}</p>
      </section>
    </div>
  )
}

export default RecipeCard
