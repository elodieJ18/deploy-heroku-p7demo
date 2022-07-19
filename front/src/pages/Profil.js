import React, { useContext } from "react";
import "../css/styles.css";
import {Connexion} from "../components/Log/Connexion";
import { UidContext } from "../components/AppContext"

export const Profil = () => {
  const uid = useContext(UidContext);
  return (
    <div className="bloc-connexion">
      {uid ? (<h1>UPDATE PAGE</h1>) : (
     <Connexion signin={false} login={true}/>
     )}
    </div>
  );
}

export default Profil;
