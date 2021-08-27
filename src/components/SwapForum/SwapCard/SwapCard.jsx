import React, { useState, useEffect } from 'react';
import styles from "./SwapCard.module.scss";
import ProfilePic from "../../../assets/kitchen_1.jpg";
import SwapReply from "../SwapReply";

const SwapCard = (props) => {
  
  const { post, updateReplied, replied } = props;
  const [ replyValue, setReplyValue ] = useState("");
  const [ replies, setReplies ] = useState([]);

  const handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setReplies(
      [replyValue,
        ...replies
      ]
    );
    setReplyValue("");
  }

  const repliesJsx = replies.map((reply, index) => {
      return (
        <SwapReply reply={reply} key={index} />
      )
    });
  
  return (
    <div className={styles.swapCard}>
      <div className={styles.comment}>
        <img src={ProfilePic} className={styles.profile__pic}></img>
        <p className={styles.post}>{post}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="reply here"
          onChange={e => setReplyValue(e.target.value)}
          value={replyValue}
          >
        </input>
      </form>
      <section className={replies}>
        {/* {replies.map((reply, index) => <div key={index}>{reply}</div>)} */}
        {repliesJsx}
      </section>

    </div>
  )
}

export default SwapCard;
