import React, { useEffect } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import citadellogo from "../../assets/CITADELLOGO.jpg";

const Login = () => {
  useEffect(() => {
    const gradient = 'linear-gradient(to bottom, #f7f5f5 59%, #d39803e0)';
    document.documentElement.style.background = gradient;

    return () => {
      document.documentElement.style.background = '';
    };
  },
 [] );
    const navigate = useNavigate();
    const LoginHandler = (e) => {
      e.preventDefault();
      navigate("/dashboard");
    };

    const SignupPage = (e) => {
      e.preventDefault();
      navigate("/signup");
    };
    return (
      <>
        <div className={styles.App}>
          <header>
          <div>
            <img className={styles.citlogo} src={citadellogo} alt="logo"></img>
          </div>
            <h4 className={styles.welcome}>Welcome to our Electronic Medical Record 👋🏽</h4>
          </header>
          <form>
            <fieldset id={styles.fieldemail}>
              <legend class={styles.lemail} for="email">
                <span id={styles.lemail}>E-mail address</span>
              </legend>
              <input
                type="text"
                id={styles.email}
                name="email"
                placeholder="Enter your e-mail address"
              />
            </fieldset>
          </form>
          <form>
            <fieldset id={styles.fieldpassword}>
              <legend class={styles.lpassw} for="passw">
                <span id={styles.lpassw}>Password</span>
              </legend>
              <input
                type="text"
                id={styles.passw}
                name="passw"
                placeholder="Enter your password"
              />
            </fieldset>
          </form>
          
          {/*<a id={styles.forgot} href="http://localhost:3000/otp">Have you forgotten your password? </a>*/}

          <form onSubmit={LoginHandler}>
            <div id={styles.move}><input id={styles.button} type="submit" value="Access your account"></input></div>
          </form>
          
          <div>
            <p id={styles.noacct}>
              {" "}
              Don’t have an account?
              <Link id={styles.a} onClick={SignupPage}> Sign up </Link>
            </p>
          </div>
        </div>
      </>
    );
  };
  export default Login;