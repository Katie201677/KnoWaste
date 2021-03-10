import React from 'react';
import styles from './Register.module.scss';

const Register = () => {
  return (
    <content className={styles.pageBody}>
      <section className={styles.mainFormContainer}>

      <h1 className={styles.header}>Sign Up</h1>

        <div className={styles.formInput}>
     
          
          <label>Name</label>
        
          <input type="text" placeholder="John Smith"></input>
         

          <label>Email</label>
          <input type="text" placeholder="Example@example.co.uk"></input> 
         

      
          <label>Password</label>
          
          <input type="password" minLength="8" placeholder="Passwords must be at least 8 characters"></input>
 


          

            <label>Student Number</label>
            <input type="text" placeholder="123456"></input>

          
       

            <label>Halls of Residence</label>
          
            <select>
              <option>Badock Hall</option>
              <option>Churchill Hall</option>
              <option>Clifton Hill House</option>
              <option>Hiatt Baker Hall</option>
              <option>Wills Hall</option>
            </select>
     
        
          
          <label>Date of Birth</label>
          <input type="date" placeholder="DD/MM/YYYY"></input>
         
      
       
          <label>Mobile Number</label>
          <input type="text" placeholder="07717330113"></input>
       </div>
       
        

        <div className={styles.termsContainer}>
        <label>Terms and Conditions</label>
        <textarea rows="5" cols="50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae doloribus nihil qui, minima harum officia cum provident sit dicta adipisci optio sequi at soluta temporibus quo quia laborum illum dignissimos! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatem labore architecto nostrum, repudiandae nisi! Minus nesciunt minima excepturi corporis eum obcaecati. Corporis tempora deleniti expedita exercitationem earum quas voluptatibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum distinctio, fugiat quis ex deserunt quasi molestias placeat ipsa quo aut ipsam itaque? Sequi explicabo quidem consequatur cumque temporibus rerum?</textarea>
        </div>

      
        <div className={styles.tickBox}>
            <input type="checkbox"/>
            <p>By ticking this box you aknowledge that you have read and agree to our terms and conditions</p>
          </div>

          <div className={styles.tickBox}>
            <input type="checkbox"></input>
            <p>By ticking this box you agree to recieving occasional tailored advertisments about our amazing products</p>
          </div>

        <div className={styles.signUpButtonContainer}>
        <button className={`${styles.signUpButton} ${styles.button}`}>Sign Up</button>
        </div>

      </section>
    </content>
  );
}

export default Register;


