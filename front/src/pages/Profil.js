import React, { useContext } from "react";
import "../css/styles.css";
import {Connexion} from "../components/Log/Connexion";
import { UidContext } from "../components/AppContext";
import  ProfilUser  from "../components/profil/ProfilUser";


function Profil()  {
  const uid = useContext(UidContext);
  
  return (
    <div className="bloc-connexion">
      {uid ? (<ProfilUser />) : (
     <Connexion />
     )}
    </div>
  );
}

export default Profil;
