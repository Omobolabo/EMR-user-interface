import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import citadellogo from "../../assets/CITADELLOGO.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <img className="citlogo" src={citadellogo} alt="logo"></img>
      </div>
      <ul>
        <li>
          <Link to="/dashboard" className="sidebar-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/patients" className="sidebar-link">
            Patients
          </Link>
        </li>
        <li>
          <Link to="/appointments" className="sidebar-link">
            Appointments
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;