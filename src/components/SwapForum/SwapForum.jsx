import React, { useState } from 'react';
import NavBar from '../NavBar';
import styles from "./SwapForum.module.scss";


import SwapRequest from "./SwapRequest";
import SwapCard from "./SwapCard";

let count = 50;
// need to add random id generator function to use for key - this is placeholder used in update posts below
 
const SwapForum = () => {
  
  const [ posts, setPosts ] = useState([]);
  const [ replied, setReplied ] = useState(false);
  
  
  
  const updatePosts = (post) => {
    setPosts(
      [{post: post, id: count},
      ...posts
      ]
    );
    count++;
  }

  const updateReplied = () => {
    setReplied(!replied);
  }
 

  const postsJsx = posts.length > 0 ?
    posts.map((post) => <SwapCard post={post.post} key={post.id} className={styles.post} updateReplied={updateReplied} replied={replied} />)
    : <p className={styles.noSwaps}>No current swaps. Do you want to add one?</p>;

  return (
    <div className={styles.content}>
      <NavBar />

      <section className={styles.mainSection}> 
        <h1 className={styles.heading}>Swap Forum</h1>
        <section className={styles.postASwap}>
          <h2>Post a Swap</h2>
          <SwapRequest placeholder="Add your swap request..." updatePosts={updatePosts} />
        </section>
        
        <section className={styles.postsDisplay}> 
          <h2>Current Swaps</h2>
          {postsJsx}
        </section>

      </section>
      
    </div>
  )
}

export default SwapForum
