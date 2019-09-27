import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Nav = () => {
  return (
    <nav className="navbar">
      
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects & Resume</Link>
        <Link to="/Bio">Bio</Link>
        <Link to="/Contact">Contact</Link>
        
      
    </nav>
  );
};

export default Nav;
