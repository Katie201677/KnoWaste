import React from "react";
import styles from "./Profile.module.scss";
import { useState, useContext} from "react";
import ProfilePic from "../../assets/kitchen_1.jpg";
import NavBar from "../NavBar/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from "../../data/fa-library.js";
import Timer from "../MealSelection/Timer";
import { UserContext } from "../../context/contextUser";
import { firestore } from '../../firebase.js';


// This shows once edit details button selected
// const EditPicProfile = () => {
//   return (
//     <div id={styles.editPicButton} className={styles.editButton}>
//       +
//     </div>
//   );
// };


const Profile = () => {

  // get current user information
  const userContext = useContext(UserContext);

  // use state to display editing profile options or not
  const [isEditing, setIsEditing] = useState(false);

  // use state to display profiles name and halls
  const [userData, setUserData] = useState({
    name: userContext.user.name,
    residenceHall: userContext.user.residenceHall
  });
  

  // function runs onClick of edit button (pen icon)
  const showEditProfile = () => {
    setIsEditing(!isEditing);
  };

  // edit/update users name in firebase
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // get the values from form 
    const name = e.target[0].value;
    const halls = e.target[1].value;

    // update on page
    setUserData({
      name: name,
      residenceHall: halls
    })

    // update full name
    firestore.collection("users").doc(userContext.user.uid).update({
      name: name
    })

    // update hall
    firestore.collection("users").doc(userContext.user.uid).update({
      residenceHall: halls
    })
  }

  return (
    <div className={`content ${styles.contentMain}`}>
      <NavBar />
      {/* <Timer /> */}
      <div className={styles.mainSection} >
        {/* profile picture tile */}

        <div className={isEditing ? `${styles.profile} box-style-1 ${styles.profile__width}` :  `${styles.profile} box-style-1` }>

          <section className={styles.profile__card}>

            <section className={styles.profile__info}>
              <img src={ProfilePic} className={styles.profile__pic}></img>
              <p className={isEditing ? styles.invisible : styles.profile__user__info}>
                <span className={styles.name}>{userData.name}</span>
                <span className={styles.hall}>{userData.residenceHall}</span>
                {/* <span className={styles.username}>Xx_king_xX</span> */}
                
              </p>

              {/* input boxes for editing below -> these display when isEditing is true */}
              <div className={isEditing ? styles.editProfile : styles.invisible}>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <label className={styles.editLabel}>Your full name</label>
                  <input type="text" id='fullNameInput' className={styles.inputBox} placeholder="Full Name" ></input>

                  {/* <label className={styles.editLabel}>Your username</label>
                  <input type="text" id='userNameInput' className={styles.inputBox} placeholder="New Username"></input> */}

                  <label className={styles.editLabel}>Your hall of residence</label>
                  <select name="halls" id="hallOptions" className={styles.hallOptions}>
                    <option value="Hiatt Baker">Hiatt Baker</option>
                    <option value="Wills">Wills</option>
                    <option value="Churchill">Churchill</option>
                    <option value="Badock">Badock</option>
                  </select>
                  <button className={styles.saveButton}>Save Changes</button>
                </form>
              </div>

              {/* editing button */}
              <div className={styles.edit__container}>
                <FontAwesomeIcon className={styles.penIcon} onClick={showEditProfile} icon="pen" />
              </div>

            </section>
          </section>

          {/* container div for the dietary requirment section and the personal data/metrics */}
        {/* <div className={styles.diet__and__score__container}> */}

          {/* Dietary information goes here -> only display selected requirments when Not editing */}
          {/* <div className={isEditing ? styles.diet__infoEditing : styles.diet__info}>
            <h3 className={isEditing ? styles.diet__header : styles.invisible}>Dietary Requirments</h3>

            <div className={styles.diet__flex__row}>
              <span className={styles.dietTile}><FontAwesomeIcon className={styles.allergyIcon} icon="bread-slice" /></span>
              <p className={isEditing ? styles.diet__label : styles.invisible}>Gluten Free</p>
            </div>
            
            <div className={styles.diet__flex__row}>
              <span className={styles.dietTile}><FontAwesomeIcon className={styles.allergyIcon} icon="carrot" /></span>
              <p className={isEditing ? styles.diet__label : styles.invisible}>Vegetarian</p>
            </div>

            <div className={styles.diet__flex__row}>
              <span className={styles.dietTile}><FontAwesomeIcon className={styles.allergyIcon} icon="leaf" /></span>
              <p className={isEditing ? styles.diet__label : styles.invisible}>Vegan</p>
            </div>
            
            <div className={styles.diet__flex__row}>
              <span className={styles.dietTile}><FontAwesomeIcon className={styles.allergyIcon} icon="cheese" /></span>
              <p className={isEditing ? styles.diet__label : styles.invisible}>Dairy Free</p>
            </div>

            <div className={styles.diet__flex__row}>
              <span className={styles.dietTile}><FontAwesomeIcon className={styles.allergyIcon} icon="egg" /></span>
              <p className={isEditing ? styles.diet__label : styles.invisible}>Nuts</p>
            </div>

          </div> */}

          {/* weekly score... data/metrics are input here */}
          {/* <div className={isEditing ? styles.score__editing : styles.score} >
              <div className={styles.figures}>
              </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  </div>
        
  );
};
export default Profile;
