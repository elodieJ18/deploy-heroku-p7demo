import React, { useState} from "react";
import "../../css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import {Navbar} from "../Navbar";
import UploadImg from "./UploadImg";
import { updateInfo } from "../../actions/user.actions";


export const ProfilUser = () => {
  
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [status, setStatus] = useState('');
 const [updateForm, setUpdateForm] = useState(false);
 const [updateImg, setUpdateImg] = useState(false);
 const userData = useSelector((state) => state.userReducer);
 const dispatch = useDispatch();

 const handleUpdate = () => {
  dispatch(updateInfo(userData.id, nom, prenom, status));
  setUpdateForm(false)
 }
    
  return (
    <div className="bloc-connexion">
     <div className="profil-container"> 
      <Navbar />
      <div className="profil-actuality">
        <div className="profil-card-post">
          <div className="profil-card-userProfil">
          {updateImg === false && (
          <>
            <div className="image-align-col">
              <div className="image-form"> 
                <img className="user-name-image" src={userData.image} alt="userimage"/>
              </div>
              <button className="btn-plus" onClick={() => setUpdateImg(!updateImg)}>+</button>
            </div>
            </>
             )}
              {updateImg && (
                <>
                  <div className="image-form"> 
              <img className="user-name-image" src={userData.image} alt="userimage"/>
            </div>
           <UploadImg />
           <button onClick={() => setUpdateImg(updateImg)}>Cancel</button>
           </>
           )}
            <div className="profil-card-userStatus">
            <div className="profil-card-usersStatus-second-col">   
              {updateForm === false && ( 
                <> 
                <div className="profil-card-description-name">
                  <p>{userData.nom}</p>
                  <p>{userData.prenom}</p>
                </div> 
                <p className="profil-card-description-email">{userData.email}</p>
                <p className="profil-card-description-status">{userData.status}</p> 
                <button className="update-btn-profil" onClick={() => setUpdateForm(!updateForm)}>Update</button>
                </>
              )}
              {updateForm && (
                <>
                 <form>
                    <label>
                      <input type="text" defaultValue={userData.nom}
                        onChange={(e) => setNom(e.target.value)}
                      />
                    </label>
                    <label>
                      <input
                         type="text" defaultValue={userData.prenom} 
                         onChange={(e) => setPrenom(e.target.value)}
                      />
                    </label>
                    <label>
                      <input
                        type="text" defaultValue={userData.status} onChange={(e) => setStatus(e.target.value)}
                      />
                    </label>
                    <button onClick={handleUpdate}>Send</button>
                    <button onClick={() => setUpdateForm(updateForm)}>Cancel</button>
                  </form>
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