import React from "react";
import styles from "./AdminWeeklyPlanner.module.scss";



const AdminWeeklyPlanner = () => {
    return (
        <section>
             {/* As a developer I can select the day of the week */}
             <div className={styles.Monday}>
             <h3>Monday</h3>
             <h3>Main</h3>
             <select>
                    <option>meal1</option>
                    <option>meal2</option>
                    <option>meal3</option>
             </select>
             <h3>Side</h3>
             <select>
                    <option>side1</option>
                    <option>side2</option>
                    <option>side3</option>
             </select>
             <h3>Dessert</h3>
             <select>
                    <option>des1</option>
                     <option>des2</option>
                     <option>des3</option>
             </select>
             </div>
             <div className={styles.Tuesday}>
             <h3>Tuesday</h3>
             <h3>Main</h3>
             <select>
                    <option>meal1</option>
                    <option>meal2</option>
                    <option>meal3</option>
             </select>
             <h3>Side</h3>
             <select>
                    <option>side1</option>
                    <option>side2</option>
                    <option>side3</option>
             </select>
             <h3>Dessert</h3>
             <select>
                    <option>des1</option>
                     <option>des2</option>
                     <option>des3</option>
             </select>
            </div>
            <div className={styles.Wednesday}>
            <h3>Wednesday</h3>
             <h3>Main</h3>
             <select>
                    <option>meal1</option>
                    <option>meal2</option>
                    <option>meal3</option>
             </select>
             <h3>Side</h3>
             <select>
                    <option>side1</option>
                    <option>side2</option>
                    <option>side3</option>
             </select>
             <h3>Dessert</h3>
             <select>
                    <option>des1</option>
                     <option>des2</option>
                     <option>des3</option>
             </select>
            </div>
            <div className={styles.Thursday}>
            <h3>Thursday</h3>
             <h3>Main</h3>
             <select>
                    <option>meal1</option>
                    <option>meal2</option>
                    <option>meal3</option>
             </select>
             <h3>Side</h3>
             <select>
                    <option>side1</option>
                    <option>side2</option>
                    <option>side3</option>
             </select>
             <h3>Dessert</h3>
             <select>
                    <option>des1</option>
                     <option>des2</option>
                     <option>des3</option>
             </select>
            </div>
            <div className={styles.Friday}>
            <h3>Friday</h3>
             <h3>Main</h3>
             <select>
                    <option>meal1</option>
                    <option>meal2</option>
                    <option>meal3</option>
             </select>
             <h3>Side</h3>
             <select>
                    <option>side1</option>
                    <option>side2</option>
                    <option>side3</option>
             </select>
             <h3>Dessert</h3>
             <select>
                    <option>des1</option>
                     <option>des2</option>
                     <option>des3</option>
             </select>
            </div>
            <div className={styles.Saturday}>
            <h3>Saturday</h3>
             <h3>Main</h3>
             <select>
                    <option>meal1</option>
                    <option>meal2</option>
                    <option>meal3</option>
             </select>
             <h3>Side</h3>
             <select>
                    <option>side1</option>
                    <option>side2</option>
                    <option>side3</option>
             </select>
             <h3>Dessert</h3>
             <select>
                    <option>des1</option>
                     <option>des2</option>
                     <option>des3</option>
             </select>
            </div>
            <div className={styles.Sunday}>
            <h3>Sunday</h3>
             <h3>Main</h3>
             <select>
                    <option>meal1</option>
                    <option>meal2</option>
                    <option>meal3</option>
             </select>
             <h3>Side</h3>
             <select>
                    <option>side1</option>
                    <option>side2</option>
                    <option>side3</option>
             </select>
             <h3>Dessert</h3>
             <select>
                    <option>des1</option>
                     <option>des2</option>
                     <option>des3</option>
             </select>
            </div>
   
        </section>
    )
}

export default AdminWeeklyPlanner;
