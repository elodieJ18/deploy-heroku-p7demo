import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.actions";


const UploadImg = () => {
    const [file, setFile] = useState();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);
    const handlePicture = (e) => {
        const data = new FormData();
        data.append("image", file);

        dispatch(uploadPicture(data, userData.id));
    }
    return(
       <form action="" onSubmit={handlePicture} className="upload-pic">
        <label htmlFor="file"></label>
        <input type="file" id="file" name="image" accept=".jpg, .jpeg, .png" 
        onChange={(e) => setFile(e.target.files[0])}/>
        <br />
        <input className="update-btn-profil" type="submit" value="Envoyer" />
       </form>
    );
}


export default UploadImg;

