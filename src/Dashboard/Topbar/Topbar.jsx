/*import citadellogo from "../../assets/CITADELLOGO.jpg";*/
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Topbar.css';

const Topbar = () => {

  const navigate = useNavigate();
    const LogoutHandler = (e) => {
      e.preventDefault();
      navigate("/");
    };

  return (
    <div className="topbar">
      <div>
        <h1 className="individual">Welcome "Firstname!!"</h1>
  </div>
      <div className="logout-button">
        <Link className="out" onClick={LogoutHandler}> Logout </Link>
      </div>
    </div>
  );
};

export default Topbar;