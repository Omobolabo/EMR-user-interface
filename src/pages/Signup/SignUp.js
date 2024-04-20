import React, { useEffect } from "react";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import citadellogo from "../../assets/CITADELLOGO.jpg";

const SignUp = () => {
  useEffect(() => {
    const gradient = 'linear-gradient(to bottom, #f7f5f5 59%, #d39803e0)';
    document.documentElement.style.background = gradient;

    return () => {
      document.documentElement.style.background = '';
    };
  },
 [] );
  const navigate = useNavigate();

  const SignUpHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const LoginPage = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>

<div className={styles.App}>
      <header>

          <div>
            <img className={styles.citlogo} src={citadellogo} alt="logo"></img>
          </div>

     <h1 className={styles.welcome}>Sign Up to our Electronic Medical Record!😊</h1>   
      </header>

      <form>
      <fieldset id={styles.firstname}>
  <legend class={styles.lename} for="name"><span id={styles.lename}>First name</span></legend>
  <input type="text" id={styles.name} name="name" placeholder="Enter your First name" />
  </fieldset>
  </form>

  <form>
      <fieldset id={styles.middlename}>
  <legend class={styles.lename} for="name"><span id={styles.lename}>Middle name</span></legend>
  <input type="text" id={styles.name} name="name" placeholder="Enter your Middle name" />
  </fieldset>
  </form>

  <form>
      <fieldset id={styles.lastname}>
  <legend class={styles.lename} for="name"><span id={styles.lename}>Last name</span></legend>
  <input type="text" id={styles.name} name="name" placeholder="Enter your Last name" />
  </fieldset>
  </form>

      <form>
      <fieldset id={styles.fieldemail}>
  <legend class={styles.lemail} for="email"><span id={styles.lemail}>E-mail address</span></legend>
  <input type="text" id={styles.email} name="email" placeholder="Enter your e-mail address" />
  </fieldset>
  </form>
  <form>
  <fieldset id={styles.fieldpassword}>
  <legend class={styles.lpassw} for="passw"><span id={styles.lpassw}>Password</span></legend>
  <input type="text" id={styles.passw} name="passw" placeholder="Enter your password" />
  </fieldset>
   </form>

   <form>
  <fieldset id={styles.confirmpassword}>
  <legend class={styles.cpassw} for="cpassw"><span id={styles.cpassw}>Confirm password</span></legend>
  <input type="text" id={styles.cpass} name="cpassw" placeholder="Confirm your password" />
  </fieldset>
   </form>



      <form onSubmit={SignUpHandler}>
      <input id={styles.button} type="submit" value="Sign Up"></input>
      </form>  


  <div><p id={styles.noacct}> Already have an account?<Link id={styles.a} onClick={LoginPage}> Log In </Link></p></div>

      </div>
    </>
  );
};

export default SignUp;