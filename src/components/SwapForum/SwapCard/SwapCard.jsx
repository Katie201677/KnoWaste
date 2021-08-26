import React, { useState } from 'react';
import styles from "./SwapCard.module.scss";

const SwapCard = (props) => {
  
  const { post, updateReplied, replied } = props;
  
  // const replyBox = replied ? 
  // : ;
  
  return (
    <div className={styles.swapCard}>
      <p>{post}</p>
      <button
        onClick={updateReplied}
      >
      reply
      </button>
      {replied && <input placeholder="reply here..."></input>} 
      {/* {replyBox} */}
    </div>
  )
}

export default SwapCard;
