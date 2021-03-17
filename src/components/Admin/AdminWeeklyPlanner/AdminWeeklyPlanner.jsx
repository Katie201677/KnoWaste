import React from "react";
import styles from "./AdminWeeklyPlanner.module.scss";
import { useForm } from "react-hook-form";


const AdminWeeklyPlanner = () => {
       const { register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
    return (
        <section>
               <form onSubmit={handleSubmit(onSubmit)}>
             {/* As a developer I can select the day of the week */}
             <div className={styles.Monday}>
             <h3>Monday</h3>
             <h3>Main</h3>
             <select name="mondayMain" ref={register}>
                    <option value="meal1">meal1</option>
                    <option value="meal2">meal2</option>
                    <option value="meal3">meal3</option>
             </select>
             <h3>Side</h3>
             <select name="mondaySide" ref={register}>
                    <option value="side1">side1</option>
                    <option value="side2">side2</option>
                    <option value="side3">side3</option>
             </select>
             <h3>Dessert</h3>
             <select name="mondayDes" ref={register}>
                    <option value="des1">des1</option>
                     <option value="des2">des2</option>
                     <option value="des3">des3</option>
             </select>
             </div>
             <div className={styles.Tuesday}>
             <h3>Tuesday</h3>
             <h3>Main</h3>
             <select name="tuesdayMain" ref={register}>
                    <option value="meal1">meal1</option>
                    <option value="meal2">meal2</option>
                    <option value="meal3">meal3</option>
             </select>
             <h3>Side</h3>
             <select name="tuesdaySide" ref={register}>
                    <option value="side1">side1</option>
                    <option value="side2">side2</option>
                    <option value="side3">side3</option>
             </select>
             <h3>Dessert</h3>
             <select name="tuesdayDes" ref={register}>
                    <option value="des1">des1</option>
                     <option value="des2">des2</option>
                     <option value="des3">des3</option>
             </select>
            </div>
            <div className={styles.Wednesday}>
            <h3>Wednesday</h3>
             <h3>Main</h3>
             <select name="wednesdayMain" ref={register}>
                    <option value="meal1">meal1</option>
                    <option value="meal2">meal2</option>
                    <option value="meal3">meal3</option>
             </select>
             <h3>Side</h3>
             <select name="wednesdaySide" ref={register}>
                    <option value="side1">side1</option>
                    <option value="side2">side2</option>
                    <option value="side3">side3</option>
             </select>
             <h3>Dessert</h3>
             <select name="wednesdayDes" ref={register}>
                    <option value="des1">des1</option>
                     <option value="des2">des2</option>
                     <option value="des3">des3</option>
             </select>
            </div>
            <div className={styles.Thursday}>
            <h3>Thursday</h3>
             <h3>Main</h3>
             <select name="thursdayMain" ref={register}>
                    <option value="meal1">meal1</option>
                    <option value="meal2">meal2</option>
                    <option value="meal3">meal3</option>
             </select>
             <h3>Side</h3>
             <select name="thursdaySide" ref={register}>
                    <option value="side1">side1</option>
                    <option value="side2">side2</option>
                    <option value="side3">side3</option>
             </select>
             <h3>Dessert</h3>
             <select name="thursdayDes" ref={register}>
                    <option value="des1">des1</option>
                     <option value="des2">des2</option>
                     <option value="des3">des3</option>
             </select>
            </div>
            <div className={styles.Friday}>
            <h3>Friday</h3>
             <h3>Main</h3>
             <select name="fridayMain" ref={register}>
                    <option value="meal1">meal1</option>
                    <option value="meal2">meal2</option>
                    <option value="meal3">meal3</option>
             </select>
             <h3>Side</h3>
             <select name="fridaySide" ref={register}>
                    <option value="side1">side1</option>
                    <option value="side2">side2</option>
                    <option value="side3">side3</option>
             </select>
             <h3>Dessert</h3>
             <select name="fridayDes" ref={register}>
                    <option value="des1">des1</option>
                     <option value="des2">des2</option>
                     <option value="des3">des3</option>
             </select>
            </div>
            <div className={styles.Saturday}>
            <h3>Saturday</h3>
             <h3>Main</h3>
             <select name="saturdayMain" ref={register}>
                    <option value="meal1">meal1</option>
                    <option value="meal2">meal2</option>
                    <option value="meal3">meal3</option>
             </select>
             <h3>Side</h3>
             <select name="saturdaySide" ref={register}>
                    <option value="side1">side1</option>
                    <option value="side2">side2</option>
                    <option value="side3">side3</option>
             </select>
             <h3>Dessert</h3>
             <select name="saturdayDes" ref={register}>
                    <option value="des1">des1</option>
                     <option value="des2">des2</option>
                     <option value="des3">des3</option>
             </select>
            </div>
            <div className={styles.Sunday}>
            <h3>Sunday</h3>
             <h3>Main</h3>
             <select name="sundayMain" ref={register}>
                    <option value="meal1">meal1</option>
                    <option value="meal2">meal2</option>
                    <option value="meal3">meal3</option>
             </select>
             <h3>Side</h3>
             <select name="sundaySide" ref={register}>
                    <option value="side1">side1</option>
                    <option value="side2">side2</option>
                    <option value="side3">side3</option>
             </select>
             <h3>Dessert</h3>
             <select name="sundayDes" ref={register}>
                    <option value="des1">des1</option>
                     <option value="des2">des2</option>
                     <option value="des3">des3</option>
             </select>
            </div>
            <input type="submit" />
            </form>
        </section>
    )
};

export default AdminWeeklyPlanner;
