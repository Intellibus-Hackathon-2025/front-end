import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";
import ResponderDashboard from "./ResponderDashboard";
import CitizenDashboard from "./CitizenDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/responder-dashboard" element={<ResponderDashboard />} />
        <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;