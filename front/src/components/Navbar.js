import React from "react";
import "../styles/style.css";
import logo from "../assets/logo-groupomania.png";

function Navbar() {
  //const title = "groupomania";
  return (
    <div className="header">
      <div className="header-content">
        <div className="navbar">
          <img className="logo" src={logo} alt="groupomania" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
