import React from "react";
import styles from "./AdminMealInput.module.scss";

const AdminMealInput = () => {
  return (<section className={styles.mainFormContainer}>
    {/* As a developer I have input boxes for each meal array item */}

    <input type="text" placeholder="Name"></input>
    <input type="text" placeholder="Description"></input>
    
    {/* As a developer I can see a button that adds images */}
      <button>Upload Image</button>
      <div className={styles.imgPreview}></div>
    
    
    {/* As a developer I can select the day of the week */}
    <h3>Day(s) Available</h3>
    <div className={styles.dayOfWeek}>
    <label htmlFor ="monday">Monday</label>
    <input type="checkbox" id="monday" value="Monday" />
    <label htmlFor ="tuesday">Tuesday</label>
    <input type="checkbox" id="tuesday" value="Tuesday" />
    <label htmlFor ="wednesday">Wednesday</label>
    <input type="checkbox" id="wednesday" value="Wednesday" />
    <label htmlFor ="wednesday">Thursday</label>
    <input type="checkbox" id="thursday" value="Thursday" />
    <label htmlFor ="friday">Friday</label>
    <input type="checkbox" id="friday" value="Friday" />
    <label htmlFor ="saturday">Saturday</label>
    <input type="checkbox" id="saturday" value="Saturday" />
    <label htmlFor ="sunday">Sunday</label>
    <input type="checkbox" id="sunday" value="Sunday" />
    </div>
    
    {/* As a developer I have a dropdown box for meal type (main, dessert etc) */}
    <h3>Meal Type</h3>
    <select>
      <option>Main</option>
      <option>Side</option>
      <option>Dessert</option>
    </select>
    {/* As a developer I have a button for allergy */}
    <h3>Allergens</h3>
    <button>Gluten</button>
    <button>Dairy</button>
    <button>Nut</button>
    <button>Shellfish</button>

    <h3>Dietary Requirements</h3>
    <button>Vegetarian</button>
    <button>Vegan</button>
    <button>Pescatarian</button>
    <button>Halal</button>
    {/* As a developer I have a dropdown menu for environmental data */}
    <label>Carbon Footprint</label>
    <input type="number"></input>
    <label>Water Usage</label>
    <input type="number"></input>

    <button>Preview</button>
    <button>Submit</button>
    {/* As a developer I have designed a basic template based on the wireframe provided (lol) */}

    {/* Multiple meals in one input??????? */}
    
  </section>);
};

export default AdminMealInput;
