import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../actions/comment.action";
import { deleteProfil } from "../../actions/user.action";
import {isEmpty} from "../Utils";

export const DeleteProfil = () => {

    const userData = useSelector((state) => state.userReducer);
    const commentData = useSelector((state) => state.commentReducer);
    const dispatch = useDispatch();

    console.log(userData.id);
    console.log(commentData.id);
    console.log(commentData);
    
    const handleDeleteProfil = () =>{   
           {!isEmpty(commentData[0]) && commentData.map((comment) =>{
                console.log(comment.id)
                if (userData.id === comment.id) return dispatch(deleteComment(comment.idObject))
                dispatch(deleteProfil(userData.id))
              })   
            }}
   

return (
            <button className="btn-profil-delete"  onClick={() => handleDeleteProfil()}>Delete Account</button>
        
);
}

export default DeleteProfil;