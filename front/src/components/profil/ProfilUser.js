import React, { useState} from "react";
import "../../css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import UploadImg from "./UploadImg";
import Logout from "../Log/Logout";
import logo from "../../assets/user-200.png";
import { updateInfo } from "../../actions/user.action";
import { deleteProfil } from "../../actions/user.action";

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

 const handleDeleteProfil = () => {
  dispatch(deleteProfil(userData.id));
  
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
                <img className="user-name-image" src={userData.image === null || userData.image === 'undefined' ? logo : userData.image}  alt="userimage"/>
              </div>
              <button className="btn-plus" onClick={() => setUpdateImg(!updateImg)}>+</button>
            </div>
            </>
             )}
              {updateImg && (
                <>
                  <div className="image-form"> 
              <img className="user-name-image" src={userData.image === null || userData.image === 'undefined' ? logo :  userData.image} alt="userimage"/>
            </div>
            
           <UploadImg />
           <button className="update-btn-profil btn-cancel-profil" onClick={() => setUpdateImg(!updateImg)}>Cancel</button>
           </>
           )}
            <div className="profil-card-userStatus">
            <div className="profil-card-usersStatus-second-col">   
              {updateForm === false && ( 
                <> 
                <div className="profil-card-description-name">
                  <p>{userData.nom === '' ? 'nom' : userData.nom}</p>
                  <p>{userData.prenom === '' ? 'prenom' : userData.prenom}</p>
                </div> 
                <p className="profil-card-description-email">{userData.email}</p>
                <p className="profil-card-description-status">{userData.status === '' ? 'status' : userData.status}</p> 
             
                <button className="update-btn-profil" onClick={() => setUpdateForm(!updateForm)}>Update</button>
                 <div className="btn-connexion-profil">
                    <Logout />
                    <button className="btn-profil-delete" onClick={handleDeleteProfil}>Delete Account</button>
                </div>
                </>
              )}
              {updateForm && (
                <>
                 <form>
                  <div className="form-profil-nom-prenom">
                    <div className="form-profil-flex-label">
                    <label label="nom" name="nom" type="text" defaultValue={userData.nom}>Nom</label>
                      <input type="text"  name="nom" defaultValue={userData.nom}
                        onChange={(e) => setNom(e.target.value)}
                      />
                    </div>
                    <div className="form-profil-flex-label">
                    <label label="prenom" name="prenom" type="text" defaultValue={userData.prenom}>Prenom</label>
                      <input
                         type="text" name="prenom" defaultValue={userData.prenom} 
                         onChange={(e) => setPrenom(e.target.value)}
                      />
                    </div>
                  </div>
                    <label label="Status" name="status" type="text" defaultValue={userData.status}>Status</label>
                      <input
                        type="text"  name="status" defaultValue={userData.status} onChange={(e) => setStatus(e.target.value)}
                      />
                   <div className="duo-update-btn-profil">
                    <button className="update-btn-profil" onClick={handleUpdate}>Send</button>
                    <button className="update-btn-profil btn-cancel-profil" onClick={() => setUpdateForm(updateForm)}>Cancel</button>
                    </div>
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