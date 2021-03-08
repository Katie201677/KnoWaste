import React from 'react';
import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <div>
    <div id='profilePic'>
      <img></img>
    </div>
    <div id='username'>
      <p>Your username</p>
      <input id='usernameInput'></input>
    </div>
    <div id='fullName'>
      <p>Your full name</p>
      <input id='fullNameInput'></input>
    </div>
    <div id='hall'>
      <p>Your hall of residence</p>
      <input id='hallInput'></input>
    </div>
    <div id='dietary'>
      <p>Your dietary requirements</p>
      <input id='dietaryInput'></input>
    </div>
    <div id='score'>
      <p>You helped save 30L of water</p>
      <p>You helped save ... of CO2</p>
    </div>
    </div>
  );
}

export default Profile;

