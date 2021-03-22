import React from "react";
//import styles from "./AdminWeeklyPlanner.module.scss";
import { useForm } from "react-hook-form";
import styles from "./AdminWeeklyPlanner.module.scss";
import DayPlannerForm from "./DayPlannerForm"
import AdminNavBar from "../AdminNavBar";

const AdminWeeklyPlanner = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

  };
  return (
    <section className={styles.content}>
      <AdminNavBar />
      <div className = {styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className="box-style-1">
        {/* As a developer I can select the day of the week */}
          <div className={styles.day}>
          <h3>Monday</h3>
          <DayPlannerForm day={"monday"} register={register}/>
          </div>

          <div className={styles.day}><h3>Tuesday</h3>
          <DayPlannerForm day={"tuesday"} register={register}/></div>

          <div className={styles.day}><h3>Wednesday</h3>
          <DayPlannerForm day={"wednesday"} register={register}/></div>
          
          <div className={styles.day}><h3>Thursday</h3>
          <DayPlannerForm day={"thursday"} register={register}/></div>
          
          <div className={styles.day}><h3>Friday</h3>
          <DayPlannerForm day={"friday"} register={register}/></div>
          
          <div className={styles.day}><h3>Saturday</h3>
          <DayPlannerForm day={"saturday"} register={register}/></div>
          
          <div className={styles.day}><h3>Sunday</h3>
          <DayPlannerForm day={"sunday"} register={register}/></div>
          
        <input type="submit" className="button-style-1"/>
      </form>
      </div>
    </section>
  )
}

export default AdminWeeklyPlanner;
