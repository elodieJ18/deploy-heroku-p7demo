import React, { useEffect, useState } from "react";
import "../../css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/user-200.png";
import {isEmpty, dateParser} from "../Utils";
import { fas, faCamera } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas, far, faCamera);



export const NewComment = () => {
    const [message, setMessage] = useState('');
    const userData = useSelector((state) => state.userReducer);
    
  return (
  <div id="create-comment">
    <div className="home-actuality-new-comment">
        <div className="home-card-container" > 
            <div className="home-card-description-comment">
                <div className="image-profil-container-home">
                        <div className="image-profil-form-home">
                            <img className="user-name-image" src={userData.image === null || userData.image === 'undefined' ? logo : userData.image}  alt="userimage"/>
                        </div>
                </div>
                <form >
                    <div className="new-post-text-and-picture"> 
                        <textarea name="message" id="message" placeholder="Partage ta vie" onChange={(e) => setMessage(e.target.value)} value={message} />
                        <div className="new-post-picture"><FontAwesomeIcon icon="camera" />
                        </div>
                    </div>
                    <div className="duo-update-btn-profil">
                        <button className="btn-update-comment" type="submit">Publish</button> 
                    </div> 
                </form>
            </div>
        </div>
    </div> 
</div>  
  );
}

export default NewComment;