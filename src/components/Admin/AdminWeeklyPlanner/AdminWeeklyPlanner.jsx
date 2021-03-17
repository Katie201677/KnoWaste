import React from "react";
//import styles from "./AdminWeeklyPlanner.module.scss";
import { useForm } from "react-hook-form";
import DayPlannerForm from "./DayPlannerForm"

const AdminWeeklyPlanner = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

  };
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* As a developer I can select the day of the week */}
          <h3>Monday</h3>
          <DayPlannerForm day={"monday"} register={register}/>
          <h3>Tuesday</h3>
          <DayPlannerForm day={"tuesday"} register={register}/>
          <h3>Wednesday</h3>
          <DayPlannerForm day={"wednesday"} register={register}/>
          <h3>Thursday</h3>
          <DayPlannerForm day={"thursday"} register={register}/>
          <h3>Friday</h3>
          <DayPlannerForm day={"friday"} register={register}/>
          <h3>Saturday</h3>
          <DayPlannerForm day={"saturday"} register={register}/>
          <h3>Sunday</h3>
          <DayPlannerForm day={"sunday"} register={register}/>
        <input type="submit" />
      </form>
    </section>
  )
}

export default AdminWeeklyPlanner;
