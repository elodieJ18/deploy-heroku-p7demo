import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.action";

import logo from "../../assets/user-200.png";


const UploadImg = () => {
    const [file, setFile] = useState();
    const dispatch = useDispatch();
    
    const [uploadImg, setUploadImg] = useState();
    const userData = useSelector((state) => state.userReducer);
    const handlePicture = (e) => {
        const data = new FormData();
        data.append("image", file);

        dispatch(uploadPicture(data, userData.id));
    }

    const handleImg = (e) => {
        setUploadImg(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
    };

    return(
       
       <form action="" onSubmit={handlePicture} className="upload-pic">
         <>
        <div className="image-form"> 
        <img className="user-name-image" src={ userData.image || uploadImg ? uploadImg || userData.image : uploadImg }  alt="userimage"/>
      </div>
      </>
        <label htmlFor="file"></label>
        <input type="file" id="file" name="image" accept=".jpg, .jpeg, .png" 
        onChange={(e) => handleImg(e)}/>
        <br />
        <input className="update-btn-profil" type="submit" value="Envoyer" />
       </form>
    );
}


export default UploadImg;

