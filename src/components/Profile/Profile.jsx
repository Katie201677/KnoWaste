import React, { useContext, useState, useEffect } from "react";
import styles from "./Profile.module.scss";
import ProfilePic from "../../assets/kitchen_1.jpg";
import NavBar from "../NavBar/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from "../../data/fa-library.js";
import Timer from "../Timer/Timer";
import { auth, firestore } from "../../firebase.js";
import { UserContext } from "../../context/contextUser"; 
import { Link, useHistory } from "react-router-dom";


const Profile = () => {

  // use state to display editing profile options or not
  const [isEditing, setIsEditing] = useState(false);
  const userContext = useContext(UserContext);
  let history = useHistory();

  // use state to display profiles name and halls
  const [userData, setUserData] = useState({
    name: userContext.user.name,
    residenceHall: userContext.user.residenceHall
  });
  

  // function runs onClick of edit button (pen icon)
  const showEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const signOut = () => {
  
    //logout function:
    auth.signOut()
    userContext.setUser(null);
    history.push("/login");
    console.log(auth.currentUser)
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
    useEffect(() => {
      console.log(userContext.user.name)
    }, [], isEditing)

  return (
    <div className={`content ${styles.contentMain}`}>
      <NavBar />
      

      <div className={styles.mainSection} >
        {/* profile picture tile */}
        <div className={isEditing ? `${styles.profile} box-style-1 ${styles.profile__width}` :  `${styles.profile} box-style-1` }>
          <section className={styles.profile__card}>

            <section className={`${styles.profile__info} box-style-1`}>
              <img src={ProfilePic} className={styles.profile__pic}></img>
              <p className={isEditing ? styles.invisible : styles.profile__user__info}>
                <span className={styles.name}>{userContext.user.name}</span>
                <span className={styles.hall}>{userContext.user.residenceHall}</span>
              </p>

              {/* input boxes for editing below -> these display when isEditing is true */}
              <div className={isEditing ? styles.editProfile : styles.invisible}>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <label className={styles.editLabel}>Your full name</label>
                  <input type="text" id='fullNameInput' className={styles.inputBox} placeholder="Full Name" ></input>

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

            <div className={styles.signOut}>
              <button className='button-style-1' onClick={signOut}>Sign out</button>
            </div>

          </section>
        </div>
      </div>
    </div>
        
  );
};
export default Profile;
