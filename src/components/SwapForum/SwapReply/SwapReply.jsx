import React from 'react';
import styles from "./SwapReply.module.scss";
import ProfilePic from "../../../assets/kitchen_1.jpg";

const SwapReply = (props) => {
  
  const { reply } = props;

  return (
    <div className={styles.replyCard}>
      <img src={ProfilePic} className={styles.profile__pic}></img>
      {reply}
    </div>
  )
}

export default SwapReply
