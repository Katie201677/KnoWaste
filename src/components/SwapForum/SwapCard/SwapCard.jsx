import React from 'react';
import styles from "./SwapCard.module.scss";

const SwapCard = (props) => {
  
  const { post } = props;
  
  return (
    <div className={styles.swapCard}>
      <p>{post}</p>
      <button>reply</button>
    </div>
  )
}

export default SwapCard;
