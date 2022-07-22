import React, { useState} from "react";
import "../../css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import {Navbar} from "../Navbar";
import UploadImg from "./UploadImg";
import { updateInfo } from "../../actions/user.actions";


export const ProfilUser = () => {
  const [status, setStatus] = useState('');
 const [updateForm, setUpdateForm] = useState(false);
 const userData = useSelector((state) => state.userReducer);
 const dispatch = useDispatch();

 const handleUpdate = () => {
  dispatch(updateInfo(userData.id, status));
  setUpdateForm(false)
 }
    
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
                <p>{userData.nom}</p>
                <p>{userData.prenom}</p>
              </div>
              <p className="profil-card-description-email">{userData.email}</p> 
              {updateForm === false && (
                <>
                <p className="profil-card-description-status">{userData.status}</p> 
                <button onClick={() => setUpdateForm(!updateForm)}>Update</button>
                </>
              )}
              {updateForm && (
                <>
                <textarea type="text" defaultValue={userData.status} onChange={(e) => setStatus(e.target.value)}>
                </textarea>
                <button onClick={handleUpdate}>Enregistrer</button>
                </>
              )}
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