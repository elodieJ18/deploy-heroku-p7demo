import React from "react";
import "../css/styles.css";
import {Connexion} from "../components/Log/Connexion";
import axios from "axios";

export const Profil = () => {

  return (
    <div className="bloc-connexion">
     <Connexion />
    </div>
  );
}

export default Profil;
