import React from "react";
import "../styles/style.css";
import logo from "../assets/logo-groupomania.png";
import {Signup} from "../components/Signup"

function Signuptest() {
  return (
    <div className="form-signup-content">
      <div className="navbar">
        <img className="logo" src={logo} alt="groupomania" />
      </div>
      <div className="form-signup-element">
        <Signup />
        <div className="from-signup">
        </div>
      </div>
    </div>
  );
}

export default Signuptest;
