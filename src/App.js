import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/SignUp";
import Otp from "./pages/OTP/otp";
import Changepassword from "./pages/Changepassword/Changepassword";
import Dashboard from "./Dashboard/Dashboard";
import Appointment from "./Dashboard/Appoint/Appoint";


function App() {
  return (
    <div className="app">
      <main className="content">
        
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/changepassword" element={<Changepassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/appointments" element={<Appointment />} />
          </Routes>
        
      </main>
    </div>
  );
}

export default App;