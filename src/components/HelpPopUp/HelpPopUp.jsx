import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './HelpPopUp.module.scss';


const HelpPopUp = () => {

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const handleClick = () => {
    setIsPopUpVisible(!isPopUpVisible);
    // const popup = document.getElementById('myPopUp');
    // return popup.classList.add('show')
    // return alert("This works")
  }
  
  return ( <div>

    <div>
      <FontAwesomeIcon onClick={handleClick} icon="question-circle" className={styles.info}/>
    </div>

    <div className={styles.popup}>
    <span className={ isPopUpVisible ? `${styles.show} ${styles.popupText}` : styles.popupText} id='myPopUp'>This is a popup</span>
    </div>
  </div>
  )
}

export default HelpPopUp;
