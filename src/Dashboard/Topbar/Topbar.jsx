/*import citadellogo from "../../assets/CITADELLOGO.jpg";*/
import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div>
        <h1 className="individual">Welcome "Firstname!!"</h1>
  </div>
      <div className="logout-button">
        <a className="out" href="http://localhost:3000/"> Logout </a>
      </div>
    </div>
  );
};

export default Topbar;