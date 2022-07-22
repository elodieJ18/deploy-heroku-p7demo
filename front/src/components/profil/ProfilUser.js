import React from "react";
import "../../css/styles.css";
import { useSelector } from "react-redux";
import {Navbar} from "../Navbar";
import UploadImg from "./UploadImg";


export const ProfilUser = () => {

 const userData = useSelector((state) => state.userReducer);
    
  return (
    <div className="bloc-connexion">
     <div className="profil-container"> 
      <Navbar />
      <div className="profil-actuality">
        <div className="profil-card-post">
          <div className="profil-card-userProfil">
            <img src={userData.image} alt="userimage"/>
            <UploadImg />
            <div className="profil-card-userStatus">
            <div className="profil-card-usersStatus-second-col">
              <div className="profil-card-description-name">
                <p>{userData.prenom}</p>
                <p>{userData.nom}</p>
              </div>
              <p className="profil-card-description-email">{userData.email}</p> 
              <p className="profil-card-description-status">{userData.status}</p> 
            </div>
            </div>
          </div>
        </div>
        <div></div>
        </div>
        </div>
    </div>
  );
}

export default ProfilUser;