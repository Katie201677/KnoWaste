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

        <div className={styles.navBarContainer}>
                <button className={styles['button-style-1']}>
                    <Link to="/admin">
                        Back
                    </Link>
                </button>
        </div>
        
    )
}

export default AdminNavBar
