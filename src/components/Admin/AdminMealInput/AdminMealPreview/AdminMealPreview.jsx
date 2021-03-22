/* import React from "react";

const AdminMealPreview = (props) => {
  const data = props;
  return (
    <section>
      <h1>{data.mealName}</h1>
      <img src={data.mealImg}></img>
      <p>{data.mealDescription}</p>
      <h3>Includes</h3>
      <ul>
        {data.mealIncludes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3>Allergens</h3>
      <ul>
        {data.mealAllergens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3>Dietary Requirements</h3>
      <ul>
        {data.mealDiet.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <h3>Carbon footprint</h3>
      <p>{data.mealCo2} grams of carbon</p>
      <h3>Water usage</h3>
      <p>{data.mealWater} ml of water</p>
      <button>Continue yo</button>
    </section>
  );
};

export default AdminMealPreview;
 */