import React, { useState } from 'react';
import NavBar from '../NavBar';
import styles from "./SwapForum.module.scss";


import SwapRequest from "./SwapRequest";
import SwapCard from "./SwapCard";

const SwapForum = () => {
  
  const [ posts, setPosts ] = useState([]);
  
  const updatePosts = (post) => {
    console.log("event fired");
    setPosts(
      [post,
      ...posts
      ]
    )
  }

  return (
    <div>
      <div className={styles.content}>
        <NavBar />

        <section className={styles.mainSection}> 
          
          <SwapRequest placeholder="Add your swap request..." updatePosts={updatePosts} />

          <section className={styles.postsDisplay}> 
            {posts.map((post, index) => <SwapCard post={post} key={index} className={styles.post} />)}
          </section>

        </section>
        
      </div>
    </div>
  )
}

export default SwapForum
