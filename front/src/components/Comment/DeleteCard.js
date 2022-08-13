import React from "react";
import "../../css/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from "react-redux";
import { deleteComment } from "../../actions/comment.action";
library.add(far, faTrashCan );

export const DeleteCard = (comment) => {

    const dispatch = useDispatch();
    const deleteQuote = () => dispatch(deleteComment(comment.idObject))

    return(
        <div onClick={() =>{
            if (window.confirm("Voulez-vous supprimer cet article ?")) { 
                deleteQuote();
            }
        }}>
             <FontAwesomeIcon icon={["far", "trash-can"]} />
        </div>
    );
   
}

export default DeleteCard;