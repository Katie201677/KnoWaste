import React, { useState } from "react";
import styles from "./Register.module.scss";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  // console.log(watch("firstName"))
  // console.log(watch("email"))

  // const [formComplete, setFormComplete] = useState(false)

  // Object.values(watch()).every(value => value) === formComplete ? '' : setFormComplete(!formComplete);
  
  let formComplete = Object.values(watch()).every(value => value)

  console.log(formComplete)


/*
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        placeholder="Name"
        ref={register({
          required: "this is a required",
          maxLength: {
            value: 2,
            message: "Max length is 2",
          },
        })}
      />
      <br/>
      {errors.firstName && errors.firstName.message}
      <br/>

      <label htmlFor="email">Email</label>
      <input
        name="email"
        placeholder="example@example.com"
        type="text"
        ref={register({
          required: "this is required",
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email address",
          },
        })}
      />
      <br />
      {errors.email && errors.email.message}
      <br />
      <button type="submit" disabled={!formComplete || true} >Submit</button>
    </form>
  );
*/
  return (
    <div className={styles.pageBody}>
      <div className={styles.mainFormContainer}>
      <h3 className={styles.header}>Sign Up</h3>
      <form onSubmit={handleSubmit} >
        
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="John Smith" ref={register}></input>

          <label>Email</label>
          <input name="email" type="email" placeholder="example@example.co.uk" ref={register}></input>

          <label>Password</label>

          <input
            name="password"
            type="password"
            minLength="8"
            placeholder="Passwords must be at least 8 characters"
            ref={register}
          ></input>

          <label>Student Number</label>
          <input name="studentNumber" type="number" placeholder="123456" ref={register}></input>

          <label>Halls of Residence</label>
          <select name="residenceHall" ref={register}>
            <option>Badock Hall</option>
            <option>Churchill Hall</option>
            <option>Clifton Hill House</option>
            <option>Hiatt Baker Hall</option>
            <option>Wills Hall</option>
          </select>

          <label>Date of Birth</label>
          <input name="dob" type="date" placeholder="DD/MM/YYYY" ref={register}></input>

          <label>Mobile Number</label>
          <input name="mobile" type="tel" placeholder="07717330113" ref={register}></input>

        <div className={styles.termsContainer}>
          <label>Terms and Conditions</label>
          <textarea rows="5" cols="50" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae doloribus
            nihil qui, minima harum officia cum provident sit dicta adipisci optio
            sequi at soluta temporibus quo quia laborum illum dignissimos! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatem labore
            architecto nostrum, repudiandae nisi! Minus nesciunt minima excepturi
            corporis eum obcaecati. Corporis tempora deleniti expedita exercitationem
            earum quas voluptatibus? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Inventore voluptatum distinctio, fugiat quis ex
            deserunt quasi molestias placeat ipsa quo aut ipsam itaque? Sequi
            explicabo quidem consequatur cumque temporibus rerum?" readOnly />
          {/* </textarea> */}
        </div>

        <div className={styles.tAndC}>
          <input name="tAndCCheck" type="checkbox" ref={register({ checked: true })}/>
          <p>
            By ticking this box you aknowledge that you have read and agree to our
            terms and conditions
          </p>
          <input name="advertisementCheck" type="checkbox" ref={register({ checked: true })}></input>
          <p>
            By ticking this box you agree to recieving occasional tailored
            advertisments about our amazing products
          </p>
        </div>

        <div className={styles.signUpButtonContainer}>
          <button type="submit" className={`${styles['btn-primary']} ${styles.button}`}>
            Sign Up
          </button>
        </div>
      </form>
      </div>
    </div>
   );
};

export default Register;

// need pattern for student number from Pete and Kirsty
//6 digit numerical

// const Input = ({ label, type, register, required }) => (
//   <>
//     <label>{label}</label>
//     <input name={label} type={type} ref={register({ required })} />
//   </>
// );

// return (
//   <div className={styles.pageBody}>
//     <form onSubmit={handleSubmit} className={styles.mainFormContainer}>
//       <h1 className={styles.header}>Sign Up</h1>

//       <div className={styles.formInput}>
//       <Input label="Name" type="text" register={register} required />
//       <Input label="Email" type="email" register={register} required />
//       <Input label="Password" type="password" register={register} required />
//       <Input label="Student Number" type="password" register={register} required />
//       <Input label="Student Number" type="password" register={register} required />
//       </div>

//       <div className={styles.signUpButtonContainer}>
//         <button
//           type="submit"
//           className={`${styles.signUpButton} ${styles.button}`}
//         >
//           Sign Up
//         </button>
//       </div>
//     </form>
//   </div>
// );
