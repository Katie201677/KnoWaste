import React from "react";
import styles from "./EditProfile.module.scss";
import { useState } from "react";
const EditProfile = () => {
  // number of dietary requirements -> may change
  // const numDietReq = 5;
  // // use loop to create array of states for each dietary requirement
  // {
  //   for (let i = 0; i < numDietReq; i++) {
  //     return [isSelected[i], SetIsSelected[i]] = useState(false);
  //   }
  // }
  const [isSelected, SetIsSelected] = useState(false);
  // function to change state if a dietary requirement
  const selectTile = (i) => {
    SetIsSelected[i](!isSelected[i]);
  }
  return (
    <div className={styles.editProfileSection}>
      {/* full name input */}
      {/* This shows once edit details button selected */}
      <p>Your full name</p>
      <input type="text" id='fullNameInput' className={styles.inputBox}></input>
      {/* username or course their on display e.g UI designer (ref figma) */}
      {/* This shows once edit details button selected */}
      <p>Your username</p>
      <input type="text" id='userNameInput' className={styles.inputBox}></input>
      {/* halls of residence */}
      {/* This shows once edit details button selected */}
      {/* drop down selection...please add more options */}
      <p>Your hall of residence</p>
      <select name="halls" id="hallOptions" className={styles.inputBox}>
        <option value="Hiatt Baker">Hiatt Baker</option>
        <option value="Wills">Wills</option>
        <option value="Churchill">Churchill</option>
        <option value="Badock">Badock</option>
      </select>
      {/* dietary requirment options */}
      <div className={styles.DietSection}>
        <span className={isSelected ? styles.dietTile : styles.dietTile} onClick={selectTile}>Diet 1</span>
        <span className={isSelected ? styles.dietTile : styles.dietTile} onClick={selectTile}>Diet 2</span>
        <span className={isSelected ? styles.dietTile : styles.dietTile} onClick={selectTile}>Diet 3</span>
        <span className={isSelected ? styles.dietTile : styles.dietTile} onClick={selectTile}>Diet 4</span>
        <span className={isSelected ? styles.dietTile : styles.dietTile} onClick={selectTile}>Diet 5</span>
      </div>
    </div>

  );
}
export default EditProfile;