import React, { useState } from 'react';
import styles from "./SwapRequest.module.scss";


const SwapRequest = (props) => {

  const { updatePosts, placeholder } = props;
  const [ value, setValue ] = useState("");
  const [ error, setError ] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    setError(false);
    if (!value) {
      setError(true);
    } else {
      updatePosts(value);
      setValue("");
    }  
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
        <button className={styles["button-style-1"]}>Post</button>
      </form>
      {error ? 
        <p className={styles.error}>Please input your request.</p>
        : <p></p>}
    </div>
  )
}

export default SwapRequest
