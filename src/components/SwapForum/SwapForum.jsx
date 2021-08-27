import React, { useState } from 'react';
import NavBar from '../NavBar';
import styles from "./SwapForum.module.scss";


import SwapRequest from "./SwapRequest";
import SwapCard from "./SwapCard";

const SwapForum = () => {
  
  const [ posts, setPosts ] = useState([]);
  const [ replied, setReplied ] = useState(false);
  
  const updatePosts = (post) => {
    console.log("event fired");
    setPosts(
      [post,
      ...posts
      ]
    )
  }

  const updateReplied = () => {
    setReplied(!replied);
  }

  const postsJsx = posts.length > 0 ?
    posts.map((post, index) => <SwapCard post={post} key={index} className={styles.post} updateReplied={updateReplied} replied={replied} />)
    : <p className={styles.noSwaps}>No current swaps. Do you want to add one?</p>;

  return (
    <div>
      <div className={styles.content}>
        <NavBar />

        <section className={styles.mainSection}> 
          <h1>Swap Forum</h1>
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
    </div>
  )
}

export default SwapForum
