import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo-groupomania.png";

function Navbar() {
  const title = "groupomania";
  return (
    <div className="header">
      <div className="header-content">
        <div className="logos">
          <img className="" src={logo} alt="groupomania" />
          <a href="">login</a>
          <a href="">sign-up</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
