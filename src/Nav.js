import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

const Nav = () => {
  return (
    <nav className="navbar">
      
        <Link to="/">HOME</Link>
        <Link to="/Projects">RESUME</Link>
        <Link to="/Bio">BIO</Link>
        <Link to="/Contact">CONTACT</Link>
      
    </nav>
  );
};

export default Nav;
