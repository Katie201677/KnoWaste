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

  return (
    <div>
      <div className={styles.content}>
        <NavBar />

        <section className={styles.mainSection}> 
          
          <SwapRequest placeholder="Add your swap request..." updatePosts={updatePosts} />

          <section className={styles.postsDisplay}> 
            {posts.map((post, index) => <SwapCard post={post} key={index} className={styles.post} updateReplied={updateReplied} replied={replied} />)}
          </section>

        </section>
        
      </div>
    </div>
  )
}

export default SwapForum
