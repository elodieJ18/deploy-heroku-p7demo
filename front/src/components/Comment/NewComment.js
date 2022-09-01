import React, { useState } from "react";
import "../../css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/user-200.png";
import { fas, faCamera, faXmark } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { createComment, getComment } from "../../actions/comment.action";
library.add(fas, far, faCamera, faXmark);



export const NewComment = () => {
    const [message, setMessage] = useState('');
    const [uploadImg, setUploadImg] = useState();
    const [file, setFile] = useState();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);

    const handleComment = async(e) => {
        if (message || message && uploadImg ) {
            const data = new FormData();
            data.append("id", userData.id);
            data.append("message", message);
            data.append("image", file);

        dispatch(createComment(data));
        dispatch(getComment());

        } else {
            alert("veuillez entrer un message")
        }
     
    };

    const handleImg = (e) => {
        setUploadImg(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
    };

    const cancelImg = () => {
        setUploadImg('');
    };
    
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
                         <div className="new-post-picture">
                            <label htmlFor="file"> <FontAwesomeIcon icon="camera" /></label>
                            <input  type="file" id="file" name="image" accept=".jpg, .jpeg, .png" 
                             onChange={(e) => handleImg(e) }/>
                        </div>
                    </div> 
                    <div>
                        {uploadImg ? (
                            <div className="img-comment-content">
                            <div className="img-comment-size img-comment-form">
                                <img className="img-comment" src={uploadImg}  alt="imageComment"/>
                            </div> 
                            < FontAwesomeIcon icon="xmark" onClick={cancelImg}/>
                            </div>
                        ) : null

                        }
                    </div>
                    <div className="duo-update-btn-profil">
                        <button className="btn-update-comment" onClick={handleComment}>Publish</button> 
                    </div> 
                </form>
            </div>
        </div>
    </div> 
</div>  
  );
}

export default NewComment;