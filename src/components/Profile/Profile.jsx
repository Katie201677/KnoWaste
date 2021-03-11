import React from 'react';
import styles from './Profile.module.scss';
import EditProfile from "./EditProfile";
import { useState } from "react";


// edit button -> use icons
// This shows once edit details button selected
const EditPicProfile = () => {
  return (
    <div id={styles.editPicButton} className={styles.editButton}>+</div>
  )
}
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const showEditProfile = () => {
    setIsEditing(!isEditing);
  }
  return (
    <div className={styles.profile}>
    {/* profile picture tile */}

    <div id={styles.profilePic} className={styles.profileContainer}>
      <img className={styles.profilePic}></img>
      <div id={styles.editPicButton} className={isEditing ? styles.editButton : styles.hidden}>+</div>
      {/* full name, username/course title and halls will disappear when edit button clicked*/}
      <div id={styles.profileInfo} className={isEditing ? styles.hidden : ''}>
        <div id={styles.fullName} className={styles.profileText}>Woody woody</div>
        <div id={styles.userName} className={styles.profileText}>woody99</div>
        <div id={styles.halls} className={styles.profileText}>Woody Hall</div>
      </div>
      {/* edit profile button */}
      <div id={styles.editProfileButton} className={styles.editButton} onClick={showEditProfile}>{isEditing ? "Save" : "Edit"}</div>
    </div>

    {/* dietary requirment summary */}
    <div className={isEditing ? styles.hidden : styles.DietSection}>
      <span className={styles.dietTile}>Diet 1</span>
      <span className={styles.dietTile}>Diet 2</span>
      <span className={styles.dietTile}>Diet 3</span>
    </div>
    <div className={isEditing ? '' : styles.hidden}>
      <EditProfile />
    </div>
    {/* weekly score... data/metrics are input here */}
      <div id={styles.score} className={isEditing ? styles.hidden : styles.stats}>
        <h2>Weekly Score</h2>
        <div className={styles.figures}>
        <p>You helped save 30L of water</p>
        <p>You helped save ... of CO2</p>
        </div>
      </div>
      {/*<NavBar />*/}
    </div>
  );
}
export default Profile;