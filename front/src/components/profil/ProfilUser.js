import React, { useState} from "react";
import "../../css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import UploadImg from "./UploadImg";
import Logout from "../Log/Logout";
import DeleteProfil from "../Log/DeleteProfil"
import logo from "../../assets/user-200.png";
import { updateInfo } from "../../actions/user.action";

export const ProfilUser = () => {
  
 const [prenom, setPrenom] = useState('');
 const [nom, setNom] = useState('');
 const [status, setStatus] = useState('');
 const [updateForm, setUpdateForm] = useState(false);
 const [updateImg, setUpdateImg] = useState(false);
 const userData = useSelector((state) => state.userReducer);
 const dispatch = useDispatch();

 const handleUpdate = () => {
    dispatch(updateInfo(userData.id, nom, prenom, status))
    setUpdateForm(false);
 } 

   console.log(userData.id);
   console.log(nom);
   console.log(prenom);
   console.log(status);

 const handleValueProfil = () => {
    setUpdateForm(true)
    setNom(userData.nom)
    setPrenom(userData.prenom)
    setStatus(userData.status)
    dispatch(updateInfo(userData.id, userData.nom, userData.prenom, userData.status))
 }  




  return (
    <div className="bloc-profil">
     <div className="profil-container"> 
      <Navbar />
      <div className="bloc-connexion">
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
                  <UploadImg />
                  <button className="update-btn-profil btn-cancel-profil" onClick={() => setUpdateImg(!updateImg)}>Cancel</button>
                </>
           )}
            <div className="profil-card-userStatus">
            <div className="profil-card-usersStatus-second-col">   
              {updateForm === false && ( 
                <> 
                <div className="profil-card-description-name">
                  <p>{userData.nom  === '' ? null : userData.nom}</p>
                  <p>{userData.prenom  === '' ? null : userData.prenom}</p>
                </div> 
                <p className="profil-card-description-email">{userData.email }</p>
                <p className="profil-card-description-status">{userData.status === '' ? null : userData.status}</p> 
             
                <button className="update-btn-profil"  onClick={() => handleValueProfil(!updateForm)}>Update</button>
                 <div className="btn-connexion-profil">
                    <Logout />
                    <DeleteProfil />
                  
                </div>
                </>
              )}
              {updateForm && (
                <>
                 <form onSubmit={handleUpdate}>
                  <div className="form-profil-nom-prenom">
                    <div className="form-profil-flex-label">
                    <label  label="nom" name="nom" type="text" >Nom</label>
                      <input required="required" type="text"  name="nom" defaultValue={userData.nom} placeholder="nom" 
                        onChange={(e) => setNom(e.target.value)}
                      />
                    </div>
                    <div className="form-profil-flex-label">
                    <label   label="prenom" name="prenom" type="text" >Prenom</label>
                      <input required="required" placeholder="prenom"  
                         type="text" name="prenom" defaultValue={userData.prenom} onChange={(e) => setPrenom(e.target.value)}
                      />
                    </div>
                  </div>
                    <label  label="Status" name="status" type="text" >Status</label>
                      <input required="required" placeholder="status" defaultValue={userData.status}  onChange={(e) => setStatus(e.target.value)}
                        type="text"  name="status" 
                      />
                   <div className="duo-update-btn-profil">
                    <button className="update-btn-profil" type="submit">Send</button> 
                    <button className="update-btn-profil btn-cancel-profil" onClick={() => setUpdateForm(!updateForm)}>Cancel</button>
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
    </div>
  );
}

export default ProfilUser;