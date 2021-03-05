import React from 'react'

const RecipeCard = (props) => {
  const {type, recipeName, dietaryrestriction} = props.mealChoice;
  console.log(props.mealChoice);
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
