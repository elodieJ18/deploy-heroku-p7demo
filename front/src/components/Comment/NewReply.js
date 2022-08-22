import React, { useEffect, useState } from "react";
import "../../css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/user-200.png";
import { fas, faCamera } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { createReply, getAllReply } from "../../actions/reply.action";
library.add(fas, far, faCamera);


export const NewReply = () => {
    const [message, setMessage] = useState('');
    const [uploadImgReply, setUploadImgReply] = useState();
    const [fileReply, setFileReply] = useState();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);
    const commentData = useSelector((state) => state.commentReducer);


    const handleReply = async(e) => {
        e.preventDefault();
        if (message || uploadImgReply || message && uploadImgReply ) {
            const data = new FormData();
            data.append("id", userData.id);
            data.append("idComment", commentData.idObject);
            data.append("message", message);
            data.append("image", fileReply);
        dispatch(createReply(data));
        dispatch(getAllReply());

        

        } else {
            alert("veuillez entrer un message")
        }
     
    };
  
    const handleImgReply = (e) => {
        setUploadImgReply(URL.createObjectURL(e.target.files[0]));
        setFileReply(e.target.files[0]);
    };

    const cancelImgReply = () => {
        setUploadImgReply('');
    };
      console.log(commentData)
      console.log(commentData.idObject)
  return (
  
    <div className="home-actuality-new-reply">
        <div className="home-card-container" > 
            <div className="home-card-description-reply">
                    <div className="image-profil-container-home">
                        <div className="image-profil-form-home-reply">
                            <img className="user-name-image" src={userData.image === null || userData.image === 'undefined' ? logo : userData.image}  alt="userimage"/>
                        </div>
                    </div>
                <form >
                    <div className="new-post-text-and-picture"> 
                        <textarea name="message" id="message" placeholder="Je répond au post" onChange={(e) => setMessage(e.target.value)} value={message} />
                          <div className="new-post-picture">
                          <label htmlFor="fileReply"> <FontAwesomeIcon icon="camera" /></label>
                            <input  type="file" id="fileReply" name="image" accept=".jpg, .jpeg, .png" 
                             onChange={(e) => handleImgReply(e) }/>
                         </div>
                    </div>    
                            
                    <div>
                        {uploadImgReply ? (
                            <div className="img-comment-content">
                            <div className="img-comment-size img-comment-form">
                                <img className="img-comment" src={uploadImgReply}  alt="imageComment"/>
                            </div> 
                            < FontAwesomeIcon icon="xmark" onClick={cancelImgReply}/>
                            </div>
                        ) : null

                        }
                    </div>
                        
                   
                    <div className="duo-update-btn-profil">
                        <button className="btn-update-comment" type="submit" onClick={handleReply}>Publish</button> 
                    </div> 
                </form>
            </div>
        </div>
    </div>   
  );
}

export default NewReply;