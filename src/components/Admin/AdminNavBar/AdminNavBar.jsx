import React from 'react'
import {useState} from "react"
import { Link } from 'react-router-dom';
import styles from './AdminNavBar.module.scss';
import logo from "../../../assets/Logo_white_new.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import library from '../../../data/fa-library.js';


const AdminNavBar = () => {
    const [ show, setShow] = useState(false);
    const handleClick = () => {
        return setShow(!show);
    }

    return (
        <section className={styles.navigation}>
            
            {/* <span className={styles.closeBtn} onClick={handleClick}> 
                <Link to="/"> 
                    <img src={logo} className={styles.logo}/>
                </Link>    
            </span> */}
            
            <ul>
                <li>
                    <Link to="/admin">
                        <FontAwesomeIcon  icon="user-circle" className={styles.icon}/>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default AdminNavBar
