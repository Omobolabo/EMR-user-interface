import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import citadellogo from "../../assets/CITADELLOGO.jpg";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div>
        <img className="citlogo" src={citadellogo} alt="logo" />
      </div>
      <ul>
        <li>
          <Link to="/dashboard" className="sidebar-link" onClick={toggleSidebar}>Dashboard</Link>
        </li>
        <li>
          <Link to="/appointments" className="sidebar-link" onClick={toggleSidebar}>Appointments</Link>
        </li>
        {/* Members Module */}
        <li>
          <Link to="/members" className="sidebar-link" onClick={toggleSidebar}>
            Members
          </Link>
        </li>
        {/* Medical Records Module */}
        <li>
          <Link to="/medical-records" className="sidebar-link" onClick={toggleSidebar}>
            Medical Records
          </Link>
        </li>
        {/* Vitals Module */}
        <li>
          <Link to="/vitals" className="sidebar-link" onClick={toggleSidebar}>
            Vitals
          </Link>
        </li>
        {/* Medications Module */}
        <li>
          <Link to="/medications" className="sidebar-link" onClick={toggleSidebar}>
            Medications
          </Link>
        </li>
        {/* Allergies Module */}
        <li>
          <Link to="/allergies" className="sidebar-link" onClick={toggleSidebar}>
            Allergies
          </Link>
        </li>
        {/* Immunizations Module */}
        <li>
          <Link to="/immunizations" className="sidebar-link" onClick={toggleSidebar}>
            Immunizations
          </Link>
        </li>
        {/* Doctors Module */}
        <li>
          <Link to="/doctors" className="sidebar-link" onClick={toggleSidebar}>
            Doctors
          </Link>
        </li>
        {/* Pharmacists Module */}
        <li>
          <Link to="/pharmacists" className="sidebar-link" onClick={toggleSidebar}>
            Pharmacists
          </Link>
        </li>
        {/* Stock Module */}
        <li>
          <Link to="/stocks" className="sidebar-link" onClick={toggleSidebar}>
            Stocks
          </Link>
        </li>
        {/* Prescriptions Module */}
        <li>
          <Link to="/prescriptions" className="sidebar-link" onClick={toggleSidebar}>
            Prescriptions
          </Link>
        </li>
        {/* Reports Module */}
        <li>
          <Link to="/reports" className="sidebar-link" onClick={toggleSidebar}>
            Reports
          </Link>
        </li>
        {/* Settings Module */}
        <li>
          <Link to="/settings" className="sidebar-link" onClick={toggleSidebar}>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;