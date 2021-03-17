import React from "react";
import styles from "./AdminMealInput.module.scss";
import mealLibrary from "../AdminLibrary/AdminLibrary.json";
import { useForm } from "react-hook-form";

const AdminMealInput = () => {
  const { register, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    mealLibrary.push(data);
   
    let newData = data;
    newData.mealIncludes = data.mealIncludes.split(", ")
    console.log(newData);
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
          ref={register ({required : true})}
        ></input>
                  {errors.mealName && errors.mealName.type === "required" && (<p>This field is required</p>)}

        <label>Description of Meal</label>
        <textarea
          type="text"
          placeholder="Description"
          name="mealDescription"
          ref={register ({required : true})}
        ></textarea>
        {errors.mealDescription && errors.mealDescription.type === "required" && (<p>This field is required</p>)}
        <button>Upload Image</button>
        <div className={styles.imgPreview}></div>
        <h3>Allergens</h3>
        <label>Gluten</label>
        <input
          type="checkbox"
          name="mealAllergens"
          value="gluten"
          className={styles.checkBox}
          ref={register }
        />
        
        <label>Dairy</label>
        <input
          type="checkbox"
          name="mealAllergens"
          value="dairy"
          className={styles.checkBox}
          ref={register }
        />
         
        <label>Shellfish</label>
        <input
          type="checkbox"
          name="mealAllergens"
          value="shellfish"
          className={styles.checkBox}
          ref={register }
        />
          

        <h3>Dietary Requirements</h3>
        <label>Vegetarian</label>
        <input
          type="checkbox"
          name="mealDiet"
          value="vegetarian"
          ref={register }
        />
        <label>Vegan</label>
        <input type="checkbox" name="mealDiet" value="vegan" ref={register } />

        <label>Halal</label>
        <input type="checkbox" name="mealDiet" value="halal" ref={register} />
        

        <h3>Meal Includes</h3>
        <input
          type="text"
          placeholder="potato, leek, cheese"
          name="mealIncludes"
          ref={register ({required : true})}
        ></input>
        {errors.mealIncludes && errors.mealIncludes.type === "required" && (<p>This field is required</p>)}    

        <label>Carbon Footprint</label>
        <input type="number" name="mealCarbon" ref={register ({required : true})}></input>
        {errors.mealCarbon && errors.mealCarbon.type === "required" && (<p>This field is required</p>)} 
        <label>Water Usage</label>
        <input type="number" name="mealWater" ref={register ({required : true})}></input>
        {errors.mealWater && errors.mealWater.type === "required" && (<p>This field is required</p>)} 

        <button>Preview</button>
        <input type="submit" />
      </form>
    </section>
  );
};

export default AdminMealInput;
