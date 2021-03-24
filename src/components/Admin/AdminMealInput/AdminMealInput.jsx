import React, { useState } from "react";
import styles from "./AdminMealInput.module.scss";
import mealLibrary from "../AdminLibrary/AdminLibrary.json";
import AdminNavBar from "../AdminNavBar";
import { useForm } from "react-hook-form";
import AdminMealPreview from "./AdminMealPreview";
import { createMeal, getAllMeals, deleteMeal } from "../../../services/meals.service"
import ConfirmationPopUp from "../ConfirmationPopUp/ConfirmationPopUp";

const AdminMealInput = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    createMeal(data);
    toggleShowPopUp();
  };

  const [ showPopUp, setShowPopUp] = useState(false);

  const toggleShowPopUp = () => {
    setShowPopUp(!showPopUp);
  }

  let data;

  return (
    <div className={styles.content}>

      <AdminNavBar />
      
      <div className={styles.formContainer}>
      <button onClick={getAllMeals} className="button-style-1">Get Da Mealz Bois</button>
      <button onClick={deleteMeal} className="button-style-1">Delete Da Mealz Bois</button>
        <form onSubmit={handleSubmit(onSubmit)} className="box-style-1">
          <h1>Add a meal</h1>
          <label>Name of Meal</label>
          <input
            type="text"
            placeholder="Name"
            name="mealName"
            ref={register({ required: true })}
          ></input>
          {errors.mealName && errors.mealName.type === "required" && (
            <p>This field is required</p>
          )}

          <label>Description of Meal</label>
          <textarea
            type="text"
            placeholder="Description"
            name="mealDescription"
            ref={register({ required: true })}
          ></textarea>
          {errors.mealDescription && errors.mealDescription.type === "required" && (
            <p>This field is required</p>
          )}

          <div className={styles.imgPreview}></div>
          <button className="button-style-1">Upload Image</button>
          <h3>Allergens</h3>
          <label>Gluten</label>
          <input
            type="checkbox"
            name="mealAllergens"
            value="gluten"
            className={styles.checkBox}
            ref={register}
          />

          <label>Dairy</label>
          <input
            type="checkbox"
            name="mealAllergens"
            value="dairy"
            className={styles.checkBox}
            ref={register}
          />

          <label>Shellfish</label>
          <input
            type="checkbox"
            name="mealAllergens"
            value="shellfish"
            className={styles.checkBox}
            ref={register}
          />

          <h3>Dietary Requirements</h3>
          <label>Vegetarian</label>
          <input type="checkbox" name="mealDiet" value="vegetarian" ref={register} />
          <label>Vegan</label>
          <input type="checkbox" name="mealDiet" value="vegan" ref={register} />

          <label>Halal</label>
          <input type="checkbox" name="mealDiet" value="halal" ref={register} />

          <label>Carbon Footprint</label>
          <input
            type="number"
            name="mealCarbon"
            ref={register({ required: true })}
          ></input>
          {errors.mealCarbon && errors.mealCarbon.type === "required" && (
            <p>This field is required</p>
          )}
          <label>Water Usage</label>
          <input
            type="number"
            name="mealWater"
            ref={register({ required: true })}
          ></input>
          {errors.mealWater && errors.mealWater.type === "required" && (
            <p>This field is required</p>
          )}

          <input type="submit" className="button-style-1" />
          { showPopUp && 
            <ConfirmationPopUp title="Submitted" message={data} toggle={toggleShowPopUp}
             />
          }
        </form>
      </div>
    </div>
  );
};

export default AdminMealInput;
