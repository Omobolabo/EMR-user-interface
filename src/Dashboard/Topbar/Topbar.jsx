import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar'; // Adjust the path as needed
import './Topbar.css';

const Topbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const LogoutHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="topbar">
      <button className="hamburger" onClick={toggleSidebar}>
        <div className={sidebarOpen ? 'line toggle' : 'line'} />
        <div className={sidebarOpen ? 'line toggle' : 'line'} />
        <div className={sidebarOpen ? 'line toggle' : 'line'} />
      </button>
      <h1 className="individual">Welcome "Firstname!!"</h1>
      <div className="logout-button">
        <Link className="out" onClick={LogoutHandler}> Logout </Link>
      </div>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Topbar;