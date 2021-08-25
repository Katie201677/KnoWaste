import React, { useState } from 'react';
import styles from "./SwapRequest.module.scss";
import ProfilePic from "../../../assets/kitchen_1.jpg";

const SwapRequest = (props) => {

  const { updatePosts, placeholder } = props;
  const [ value, setValue ] = useState("");


  const handleSubmit = (event) => {
    updatePosts(value);
    event.preventDefault();
    setValue("");
  }
  
  return (
    <div className={styles.addSwap}>
      <img src={ProfilePic} className={styles.profile__pic}></img>
      <form onSubmit={handleSubmit} className={styles.swapForm}>
        <input 
          className={styles.input}
          type="text"
          placeholder={placeholder}
          onChange={e => setValue(e.target.value)}
          value={value}
        >
        </input>
        <button>Post</button>
      </form>
    </div>
  )
}

export default SwapRequest
