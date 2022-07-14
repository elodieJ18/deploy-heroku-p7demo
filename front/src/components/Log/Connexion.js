import React from "react";
import "../../css/styles.css";
import logo from "../../assets/logo-groupomania.png";

export const Connexion = () => {
  return (
    <div className="bloc-connexion">
      <div className="navbar">
        <img className="logo" src={logo} alt="groupomania" />
      </div>
      <div className="bloc-connexion-content">
        <div className="bloc-connexion-element">
          <a className="btn-bleu-navy" href="/Signup">
            sign-up
          </a>
          <a className="btn-bleu" href="/Login">
            login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
