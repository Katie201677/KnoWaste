import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HelpPopUp.module.scss";
import helpPopUp from "../../data/helppopup-library";

const HelpPopUp = (props) => {
  const sourcePage = props.sourcePage;
  let pageText = "";

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const handleClick = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

  const filteredPopUp = helpPopUp.filter((page) => {
    return page.label == sourcePage;
  })[0].text

  return (
    <div>
      <div className='inforTopRight'>
        <FontAwesomeIcon
          onClick={handleClick}
          icon="question-circle"
          className={styles.info}
        />
      </div>

      <div className={styles.popup}>
        <span
          className={
            isPopUpVisible
              ? `${styles.show} ${styles.popupText}`
              : styles.popupText
          }
          id="myPopUp"
        >
          <h1>How to use this page!</h1>
          <p>
            {
            filteredPopUp
            }
          </p>
        </span>
      </div>
    </div>
  );
};

export default HelpPopUp;
