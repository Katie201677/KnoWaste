import React from "react";
import styles from "./Register.module.scss";
import { useForm } from "react-hook-form";

const Register = () => {
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));


  // REAL EMAIL VALIDATION COMES HERE!


  const emailIsUnique = async(email) => {
    await wait(1000);
    return email === "test@example.com" ? "email is already in use" : undefined;
  };

  const onSubmit = (data) => {
      // Simple POST request with a JSON body using fetch
      // const requestOptions = {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ title: 'React POST Request Example' })
      // };
      // fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
      //     .then(response => response.json())
      //     .then(data => this.setState({ postId: data.id }));
  };

  const { 
    register,
    handleSubmit,
    errors,
    formState
  } = useForm({
    mode: 'onBlur'
  });

  return (
    <div className={styles.pageBody}>
      <div className={styles.mainFormContainer}>
        <div>
        <h3 className={styles.header}>Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Smith"
            ref={register({
              required: "Name is required.",
            })}
          ></input>
          {errors.name && <p className={styles.inputError}>{errors.name.message}</p>}
          
          <label htmlFor="email">Email</label>
          
          <input
            id="email"
            name="email"
            type="text"
            placeholder="example@example.co.uk"
            ref={register({
              required: "Email is required.",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address"
              },
              validate: (email) => emailIsUnique(email)
            })}
          ></input>
          {errors.email && <p className={styles.inputError}>{errors.email.message}</p>}

          <label htmlFor="password">Password</label>
          
          <input
            id= "password"
            name="password"
            type="password"
            ref={register({
              required: "Password is required.",
              pattern: {
                value: /[A-Za-z0-9]{8,}/,
                message: "Minimum eight characters.",
              },
            })}
          ></input>
          {errors.password && <p className={styles.inputError}>{errors.password.message}</p>}

          <label>Student Number
          </label>
          
          <input
            name="studentNumber"
            type="number"
            placeholder="123456"
            ref={register({
              minLength: {
                value: 6,
                message: "At least 6 numbers.",
              },
              required: "Student Number is required."
            })}
          ></input>
          {errors.studentNumber && <p className={styles.inputError}>{errors.studentNumber.message}</p>}
            
          <label>Halls of Residence
          </label>
          <select name="residenceHall" 
            ref={register({
              required: "Residence Hall is required."
            })}
          >
            <option value="">----select hall----</option>
            <option value="Badock Hall">Badock Hall</option>
            <option value="Churchill Hall">Churchill Hall</option>
            <option value="Clifton Hill House">Clifton Hill House</option>
            <option value="Hiatt Baker Hall">Hiatt Baker Hall</option>
            <option value="Wills Hall">Wills Hall</option>
          </select>
          {errors.residenceHall && <p className={styles.inputError}>{errors.residenceHall.message}</p>}

          <label>Date of Birth
          </label>
          <input
            name="dob"
            type="date"
            placeholder="DD/MM/YYYY"
            ref={register({
              required: "Date of Birth is required."
            })}
          ></input>
          {errors.dob && <p className={styles.inputError}>{errors.dob.message}</p>}

          <label>Mobile Number</label>
          <input
            name="mobile"
            type="tel"
            placeholder="07717330113"
            ref={register}
          ></input>

          <div className={styles.termsContainer}>
            <label>Terms and Conditions
            </label>
           <div className={styles.terms}>
             <p>
             nihil qui, minima harum officia cum provident sit dicta adipisci optio
            sequi at soluta temporibus quo quia laborum illum dignissimos! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatem labore
            architecto nostrum, repudiandae nisi! Minus nesciunt minima excepturi
            corporis eum obcaecati. Corporis tempora deleniti expedita exercitationem
            earum quas voluptatibus? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Inventore voluptatum distinctio, fugiat quis ex
            deserunt quasi molestias placeat ipsa quo aut ipsam itaque? Sequi
            explicabo quidem consequatur cumque temporibus rerum
             </p>
           </div>
          </div>

          <div className={styles.tAndC}>
            <input
              name="tAndCCheck"
              type="checkbox"
              ref={
                register({ required: "You must agree to the Terms and Conditions." }
              )}
              value = {true}
            />
            <p>
              By ticking this box you aknowledge that you have read and agree to
              our terms and conditions
            </p>
          </div>
            {errors.tAndCCheck && <p className={styles.inputError}>{errors.tAndCCheck.message}</p>}
          <div className={styles.tAndC}>
            <input
              value = {true}
              ref={register}
              name="advertisementCheck"
              type="checkbox"
            ></input>
            <p>
              By ticking this box you agree to recieving occasional tailored
              advertisments about our amazing products
            </p>
          </div>
            <button
              type="submit"
              className={styles["button-style-1"]}
              disabled={!formState.isValid}
            >
              Sign Up
            </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Register;

