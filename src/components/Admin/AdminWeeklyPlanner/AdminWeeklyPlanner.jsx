import React, { useEffect, useState }  from "react";
import { useHistory } from "react-router-dom";
//import styles from "./AdminWeeklyPlanner.module.scss";
import { useForm } from "react-hook-form";
import styles from "./AdminWeeklyPlanner.module.scss";
import DayPlannerForm from "./DayPlannerForm"
import AdminNavBar from "../AdminNavBar";
import { getAllMeals, addMealsToWeeklyPlanner }  from "../../../services/meals.service"


const AdminWeeklyPlanner = () => {
  const { register, handleSubmit } = useForm();
  let history = useHistory();
  
  const onSubmit = (data) => {
    addMealsToWeeklyPlanner(data);
    history.push('/admin');
  };

  const [meals, setMeals] = useState([])

  useEffect(() => {
    getAllMeals().then(mealIds => {
      setMeals(mealIds)
    })
  },[])

  return (
    <section className={styles.content}>
      <AdminNavBar />
      <div className = {styles.formContainer}>
        
      <form onSubmit={handleSubmit(onSubmit)} className="box-style-1">
        <div className={styles.titleContainer}>
          <h3>Option 1</h3>
          <h3>Option 2</h3>
          <h3>Option 3</h3>
        </div>
        {/* As a developer I can select the day of the week */}
          <div className={styles.day}><h3>Monday</h3>
          <DayPlannerForm day={"monday"} register={register} meals={meals} /></div>

          <div className={styles.day}><h3>Tuesday</h3>
          <DayPlannerForm day={"tuesday"} register={register} meals={meals}/></div>

          <div className={styles.day}><h3>Wednesday</h3>
          <DayPlannerForm day={"wednesday"} register={register} meals={meals}/></div>
          
          <div className={styles.day}><h3>Thursday</h3>
          <DayPlannerForm day={"thursday"} register={register} meals={meals}/></div>
          
          <div className={styles.day}><h3>Friday</h3>
          <DayPlannerForm day={"friday"} register={register} meals={meals}/></div>
          
          <div className={styles.day}><h3>Saturday</h3>
          <DayPlannerForm day={"saturday"} register={register} meals={meals}/></div>
          
          <div className={styles.day}><h3>Sunday</h3>
          <DayPlannerForm day={"sunday"} register={register} meals={meals}/></div>
          
        <input type="submit" className="button-style-1"/>
      </form>
      </div>
    </section>
  )
}

export default AdminWeeklyPlanner;
