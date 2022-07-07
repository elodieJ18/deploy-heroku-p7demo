import React from "react";
import "../styles/style.css";
import logo from "../assets/logo-groupomania.png";
import {Login} from "../components/Login"

function Logintest() {

  return (
    <div className="form-signup-content">
      <div className="navbar">
        <img className="logo" src={logo} alt="groupomania" />
      </div>
      <div className="form-signup-element">
         <Login />
        <div className="from-signup">
        </div>
      </div>
    </div>
  );
}

export default Logintest;
