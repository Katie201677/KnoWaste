import React from 'react';
import styles from './Register.module.scss';

const Register = () => {
  return (
    <section className={styles.mainFormContainer}>

     

      <div className={styles.entryContainer}>
      <label>Name</label>
      <label>Confirm Name</label>
      <input type="text" placeholder="John Smith"></input>
      <input type="text" placeholder="John Smith"></input>
      </div>

      <div className={styles.entryContainer}>
      <label>Email</label>
      <label>Confirm Email</label>
      <input type="text" placeholder="Example@example.co.uk"></input>
      <input type="text" placeholder="Example@example.co.uk"></input>
      </div>

      
      <div className={styles.entryContainer}>
      <label>Password</label>
      <label>Confirm Password</label>
      <input type="password" minLength="8" placeholder="Passwords must be at least 8 characters"></input>
      <input type="password" placeholder=""></input> </div>


      

      <div className={styles.entryContainer}>
      <label>Student Number</label>
      <label>Halls of Residence</label>
      <input type="text" placeholder="123456"></input>
      <select>
        <option>Badock Hall</option>
        <option>Churchill Hall</option>
        <option>Clifton Hill House</option>
        <option>Hiatt Baker Hall</option>
        <option>Wills Hall</option>
      </select>
      </div>
     
      <div className={styles.entryContainer}>
      <label>Date of Birth</label>
      <label>Mobile Number</label>
      <input type="date" placeholder="DD/MM/YYYY"></input>
      <input type="text" placeholder="Name Confirmation"></input> </div>

      <div className={styles.termsContainer}>
      <label>Name</label>
      <textarea rows="4" cols="50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae doloribus nihil qui, minima harum officia cum provident sit dicta adipisci optio sequi at soluta temporibus quo quia laborum illum dignissimos!</textarea>
      </div>

      <div>
      
        <input type="checkbox"/>
        <p>By ticking this box you aknowledge that you have read and agree to our terms and conditions</p><br />
        <input type="checkbox"></input>
        <p>By ticking this box you agree to recieving occasional tailored advertisments about our amazing products</p>
      </div>

      <div className={styles.signUpButtonContainer}>
      <button className={styles.signUpButton}>Sign Up</button>
      </div>

    </section>
  );
}

export default Register;


