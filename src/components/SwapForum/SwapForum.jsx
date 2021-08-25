import React from 'react';
import NavBar from '../NavBar';
import styles from "./SwapForum.module.scss";

const SwapForum = () => {
  return (
    <div>
      <div className={styles.content}>
        <NavBar />
        <div className={styles.mainSection}>

          <div>
            <p>swaps here</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SwapForum
