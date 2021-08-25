import React, { useState } from 'react';
import NavBar from '../NavBar';
import styles from "./SwapForum.module.scss";


import SwapRequest from "./SwapRequest";

const SwapForum = () => {
  
  const [ posts, setPosts ] = useState("");
  
  // const [ newPost, setNewPost ] = useState("");
  
  const updatePosts = (post) => {
    console.log("event fired");
    setPosts(
      [post,
      ...posts
      ]
    )
  }

  // const getPostsJsx = () => {
  //   return (posts.map(post => <SwapRequest post={post} />));
  // }

  return (
    <div>
      <div className={styles.content}>
        <NavBar />

        <section className={styles.mainSection}> 
          <SwapRequest placeholder="Add your swap request..." updatePosts={updatePosts} />
        {posts}
        </section>
      </div>
    </div>
  )
}

export default SwapForum
