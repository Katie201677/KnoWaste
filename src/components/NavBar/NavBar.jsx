import React from 'react'
import {useState} from "react"
import styles from './NavBar.module.scss'
import logo from "../../assets/Logo_white_new.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import library from '../../data/fa-library.js'
import { CSSTransition } from 'react-transition-group'


const NavBar = () => {
    const [ show, setShow] = useState(false);
    const handleClick = () => {
        return setShow(!show);
    }

    return (
        <div>
            <section className={styles.navBarContainer}>
                <span className={styles.closeBtn} onClick={handleClick}>      
                        <img src={logo} className={styles.logo}/>
                </span>

                {/* <CSSTransition in={show} timeout={200} classNames="appear">
                   <div className="sideNav">                
                                    <a href="">Select Meals</a>
                                    <a href="">Looking to Swap</a>
                                    <a href="">Play Game</a>
                                    <a href="">Enviromental Impact</a>
                                    <a href="">Sign Out</a>
                                    <a href="">About Us</a>
                    </div>  
                
                </CSSTransition> */}
                { show ? <div className={styles.sideNav}>                
                                    <a href="">Select Meals</a>
                                    <a href="">Looking to Swap</a>
                                    <a href="">Play Game</a>
                                    <a href="">Enviromental Impact</a>
                                    <a href="">Sign Out</a>
                                    <a href="">About Us</a>
                        </div>
                :
                null
                }
                
                <ul className={styles.mainNav}>
                    <li className={styles.utensils}>
                        <FontAwesomeIcon icon="utensils"/>
                    </li>
                    <li className={styles.trophy}>
                        <FontAwesomeIcon  icon="trophy"/>
                    </li>
                    <li className={styles.userCircle}>
                        <FontAwesomeIcon  icon="user-circle"
                        />
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default NavBar
