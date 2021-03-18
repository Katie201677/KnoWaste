import React from 'react'
import {useState} from "react"
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import logo from "../../assets/Logo_white_new.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import library from '../../data/fa-library.js';
import { CSSTransition } from 'react-transition-group';


const NavBar = () => {
    const [ show, setShow] = useState(false);
    const handleClick = () => {
        return setShow(!show);
    }

    return (
        <div className='nav-bar-desk'>
            <section className={styles.navigation}>
                
                <span className={styles.closeBtn} onClick={handleClick}> 
                    <Link to="/"> 
                        <img src={logo} className={styles.logo}/>
                    </Link>    
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
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default NavBar
