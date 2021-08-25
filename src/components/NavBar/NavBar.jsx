import React from 'react'
import {useState} from "react"
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import logo from "../../assets/logoNoText.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import library from '../../data/fa-library.js';
import { CSSTransition } from 'react-transition-group';


const NavBar = () => {
    const [ show, setShow] = useState(false);
    const handleClick = () => {
        return setShow(!show);
    }

    return (
        <nav className={`${styles['nav-bar']} nav-box-desk `}>
                <ul className={styles.mainNav}>
                    <li>
                        <Link to="/home"> 
                            <FontAwesomeIcon icon="home" className={styles.iconStyle}/>
                        </Link>    
                    </li>
                    <li>
                        <Link to="/aboutus">
                            <FontAwesomeIcon icon="info-circle" className={styles.iconStyle}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/mealselection">
                            <FontAwesomeIcon icon="utensils" className={styles.iconStyle}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/gamification">
                            <FontAwesomeIcon  icon="trophy" className={styles.iconStyle}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <FontAwesomeIcon  icon="user-circle" className={styles.iconStyle}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/swapforum">
                            <FontAwesomeIcon  icon="exchange-alt" className={styles.iconStyle}/>
                        </Link>
                    </li>
                </ul>
        </nav>
    )
}

export default NavBar
