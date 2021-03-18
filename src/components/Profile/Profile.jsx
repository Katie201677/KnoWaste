import React from "react";
import styles from "./Profile.module.scss";
import { useState } from "react";
import ProfilePic from "../../assets/kitchen_1.jpg";
import NavBar from "../NavBar/";
import Timer from "../MealSelection/Timer";

// edit button -> use icons
// This shows once edit details button selected
const EditPicProfile = () => {
  return (
    <div id={styles.editPicButton} className={styles.editButton}>
      +
    </div>
  );
};
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const showEditProfile = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div className="content">
      <NavBar />
      <Timer />
      <div className={styles.mainSection} >
        {/* profile picture tile */}

        <div className={styles.profile}>

          <section className={styles.profile__card}>

            <section className={styles.profile__info}>
              <img src={ProfilePic} className={styles.profile__pic}></img>
              <p className={styles.profile__editinfo}>
                <span className={styles.name}>John Doe</span><br></br>
                <span className={styles.hall}>Pseudonym Hall</span><br></br> 
                <span className={styles.username}>Xx_king_xX</span><br></br>
                
              </p>
            </section>

            <div className={styles.diet__info}>
              <span className={styles.dietTile}>Diet 1</span>
              <span className={styles.dietTile}>Diet 2</span>
              <span className={styles.dietTile}>Diet 3</span>
            </div>
          </section>
        <div className={isEditing ? "" : styles.hidden}></div>
        {/* weekly score... data/metrics are input here */}
        <div
          id={styles.score}
          className={isEditing ? styles.hidden : styles.stats}
        >
          <h2>Weekly Score</h2>
          <div className={styles.figures}>
            <p>You helped save 30L of water</p>
            <p>You helped save ... of CO2</p>
          </div>
        </div>
      </div>
    </div>
        </div>
        
  );
};
export default Profile;
