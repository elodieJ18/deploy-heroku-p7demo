import React from "react";
//import "../styles/Connexion.css";

function register() {
  return "Bonjour";
}
function Connexion() {
  const somme = register();
  return (
    <div className="header">
      <div className="header-content">
        <div className="navbar"></div>
        <div>{somme}</div>
      </div>
    </div>
  );
}

export default Connexion;
