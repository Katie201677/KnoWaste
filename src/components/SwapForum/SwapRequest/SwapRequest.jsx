import React, { useState } from 'react';
import styles from "./SwapRequest.module.scss";


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
