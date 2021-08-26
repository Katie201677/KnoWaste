import React from 'react';
import styles from "./SwapReply.module.scss";

const SwapReply = (props) => {
  
  const { reply } = props;

  return (
    <div className={styles.replyCard}>
      {reply}
    </div>
  )
}

export default SwapReply
