import React from "react";
import styles from "./AdminMealInput.module.scss";
import mealLibrary from "../AdminLibrary/AdminLibrary.json";
import { useForm } from "react-hook-form";

const AdminMealInput = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    mealLibrary.push(data);
    //push a random ID to it
    //split mealIncludes and return as array
    //push it to adminLibrary
    console.log(mealLibrary)
  };

  return (
    <section className={styles.mainFormContainer}>
      <h1>Add a meal</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name of Meal</label>
        <input
          type="text"
          placeholder="Name"
          name="mealName"
          ref={register}
        ></input>
        <label>Description of Meal</label>
        <textarea
          type="text"
          placeholder="Description"
          name="mealDescription"
          ref={register}
        ></textarea>
        <button>Upload Image</button>
        <div className={styles.imgPreview}></div>
        <h3>Meal Type</h3>
        <select name="mealType" ref={register}>
          <option value="main">Main</option>
          <option value="side">Side</option>
          <option value="dessert">Dessert</option>
        </select>
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
        <input
          type="checkbox"
          name="mealDiet"
          value="vegetarian"
          ref={register}
        />
        <label>Vegan</label>
        <input type="checkbox" name="mealDiet" value="vegan" ref={register} />
        <label>Halal</label>
        <input type="checkbox" name="mealDiet" value="halal" ref={register} />

        <h3>Meal Includes</h3>
        <input
          type="text"
          placeholder="potato, leek, cheese"
          name="mealIncludes"
          ref={register}
        ></input>

        <label>Carbon Footprint</label>
        <input type="number" name="mealCarbon" ref={register}></input>
        <label>Water Usage</label>
        <input type="number" name="mealWater" ref={register}></input>

        <button>Preview</button>
        <input type="submit" />
      </form>
    </section>
  );
};

export default AdminMealInput;
