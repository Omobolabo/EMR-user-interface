import React from "react";
import styles from "./Changepassword.module.css";
import { useNavigate } from "react-router-dom";
import citadellogo from "../../assets/CITADELLOGO.jpg";

const Changepassword = () => {

    const navigate = useNavigate();
    const ChangeHandler = (e) => {
      e.preventDefault();
      navigate("/dashboard");
    };

    return (
        <>
          <div className={styles.App}>
            <header>
            <div>
            <img className={styles.citlogo} src={citadellogo} alt="logo"></img>
          </div>
              <h5 className={styles.welcome}>Enter your new password.</h5>
        </header>

        <form>
  <fieldset id={styles.fieldpassword}>
  <legend class={styles.lpassw} for="passw"><span id={styles.lpassw}>New Password</span></legend>
  <input type="text" id={styles.passw} name="passw" placeholder="Enter your password" />
  </fieldset>
   </form>

   <form>
  <fieldset id={styles.confirmpassword}>
  <legend class={styles.cpassw} for="cpassw"><span id={styles.cpassw}>Confirm Password</span></legend>
  <input type="text" id={styles.cpass} name="cpassw" placeholder="Confirm your password" />
  </fieldset>
   </form>

        <form onSubmit={ChangeHandler}>
          <input id={styles.button} type="submit" value="Change"></input>
        </form>
        </div>
    </>
);
};



export default Changepassword;