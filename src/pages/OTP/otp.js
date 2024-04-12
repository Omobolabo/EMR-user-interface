import React from "react";
import styles from "./otp.module.css";
import { useNavigate } from "react-router-dom";
import citadellogo from "../../assets/CITADELLOGO.jpg";

const Otp = () => {

    const navigate = useNavigate();
    const OtpHandler = (e) => {
      e.preventDefault();
      navigate("/changepassword");
    };

    return (
        <>
          <div className={styles.App}>
            <header>
            <div>
            <img className={styles.citlogo} src={citadellogo} alt="logo"></img>
          </div>
              <h5 className={styles.welcome}>Enter 5 digit code sent to your email.</h5>
        </header>

        <form>
          <fieldset id={styles.fieldemail}>
            <legend class={styles.lemail} for="email">
              <span id={styles.lemail}>Code</span>
            </legend>
            <input
              type="text"
              id={styles.email}
              name="email"
              placeholder="Enter 5 digit code"
            />
          </fieldset>
        </form>

        <form onSubmit={OtpHandler}>
          <input id={styles.button} type="submit" value="Verify"></input>
        </form>
        </div>
    </>
);
};



export default Otp;