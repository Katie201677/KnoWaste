import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './HelpPopUp.module.scss';


const HelpPopUp = (props) => {
  const sourcePage = props.sourcePage;
  let pageText = '';
  switch(sourcePage) {
    case 'homepage':
      pageText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo aliquam autem non magnam ad provident, veniam dolore reiciendis sequi, amet accusamus sint exercitationem molestias libero voluptatem? Consectetur harum laudantium recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequatur repellat voluptatem deleniti aspernatur quam molestias suscipit vitae, atque earum? Reprehenderit possimus, repellendus sit non voluptatum tenetur mollitia assumenda earum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae doloribus libero illum officiis numquam eaque blanditiis nam quo quibusdam magni ducimus rem molestias est voluptatibus eum, delectus amet, exercitationem nihil. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate consequatur laudantium soluta pariatur minima optio facilis. Sapiente deleniti veniam distinctio, totam optio nulla molestiae perspiciatis repellendus accusantium! Quidem, et illo.';
      
      break;
    default:
      pageText = 'this is default';
  }

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const handleClick = () => {
    setIsPopUpVisible(!isPopUpVisible);
  }
  
  return ( <div>

    <div>
      <FontAwesomeIcon onClick={handleClick} icon="question-circle" className={styles.info}/>
    </div>

  <div className={styles.popup}>
    <span className={ isPopUpVisible ? `${styles.show} ${styles.popupText}` : styles.popupText} id='myPopUp'>
      <h1>How to use this page!</h1>
      <p>{pageText}</p>
    </span>
    </div>

  </div>
  )
}

export default HelpPopUp;


