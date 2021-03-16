import React from "react";
import styles from "./AdminMealInput.module.scss";
import { mealLibrary } from "../AdminLibrary/AdminLibrary";


const AdminMealInput = () => {

  return (<section className={styles.mainFormContainer}>
    {/* As a developer I have input boxes for each meal array item */}



<form>
    <input type="text" placeholder="Name" className={mealName}></input>
    <input type="text" placeholder="Description" className={mealDescription}></input>
    {/* As a developer I can see a button that adds images */}
      <button>Upload Image</button>
      <div className={`${styles.imgPreview} ${mealImage}`}></div>

    {/* As a developer I have a dropdown box for meal type (main, dessert etc) */}
    <h3>Meal Type</h3>
    <select className = {mealType}>
      <option>Main</option>
      <option>Side</option>
      <option>Dessert</option>
    </select>
    {/* As a developer I have a button for allergy */}
    <h3 className = {mealAllergens}>Allergens</h3>
    <button>Gluten</button>
    <button>Dairy</button>
    <button>Nut</button>
    <button>Shellfish</button>

    <h3 className = {mealDiet}>Dietary Requirements</h3>
    <button>Vegetarian</button>
    <button>Vegan</button>
    <button>Pescatarian</button>
    <button>Halal</button>

<h3>Meal Includes</h3>
<input type="text" placeholder="potato, leek, cheese" className={mealIncludes}></input>

    {/* As a developer I have a dropdown menu for environmental data */}
    <label>Carbon Footprint</label>
    <input type="number" className = {mealCarbon}></input>
    <label>Water Usage</label>
    <input type="number" className = {mealWater}></input>

    <button>Preview</button>
    <input type="submit"/>
    {/* As a developer I have designed a basic template based on the wireframe provided (lol) */}

    {/* Multiple meals in one input??????? */}
    </form>

    {/* 
    
    ON SUBMIT - SEND THE FORM DATA AS AN OBJECT WITH EACH VALUE FORMATTED CORRECTLY
    
    
    */}





  </section>);
};

export default AdminMealInput;
