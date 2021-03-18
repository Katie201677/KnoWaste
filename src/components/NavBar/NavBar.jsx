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
            <section className={`${styles.navBarContainer} box-style-4`}>

                {/* <CSSTransition in={show} timeout={200} classNames="appear">
                <div className="sideNav">                
                                    <a href="">Select Meals</a>
                                    <a href="">Looking to Swap</a>
                                    <a href="">Play Game</a>
                                    <a href="">Enviromental Impact</a>
                                    <a href="">Sign Out</a>
                                    <a href="">About Us</a>
                    </div>  
                
                </CSSTransition>
                { show ? <div className={styles.sideNav}>   
                            <Link to="/mealselection">Select Meals</Link>
                            <Link to="/environment">Enviromental Impact</Link> 
                            <Link to="/aboutus">About Us</Link>   
                            <Link to="/login">Sign Out</Link>

                        </div>
                :
                null
                } */}
                
<<<<<<< HEAD
                <ul className={styles.mainNav}>
                    <li className={styles.utensils}>
                        <Link to="/"> 
                            <FontAwesomeIcon icon="home" className={styles.iconStyle}/>
                        </Link>    
                    </li>
                    <li className={styles.utensils}>
                        <Link to="aboutus">
                            <FontAwesomeIcon icon="info-circle" className={styles.iconStyle}/>
                        </Link>
                    </li>
                    <li className={styles.utensils}>
                        <Link to="mealselection">
                            <FontAwesomeIcon icon="utensils" className={styles.iconStyle}/>
                        </Link>
                    </li>
                    <li className={styles.trophy}>
                        <Link to="gamification">
                            <FontAwesomeIcon  icon="trophy" className={styles.iconStyle}/>
                        </Link>
                    </li>
                    <li className={styles.userCircle}>
                        <Link to="profile">
                            <FontAwesomeIcon  icon="user-circle" className={styles.iconStyle}/>
=======
                <ul>
                    <li>
                        <Link to="/aboutus">
                            <FontAwesomeIcon icon="info-circle" className={styles.icon}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/mealselection">
                            <FontAwesomeIcon icon="utensils" className={styles.icon}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/gamification">
                            <FontAwesomeIcon  icon="trophy" className={styles.icon}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <FontAwesomeIcon  icon="user-circle" className={styles.icon}/>
>>>>>>> master
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default NavBar
