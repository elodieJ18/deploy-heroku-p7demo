import React from "react";
import "../../../css/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from "react-redux";
import { deleteReply } from "../../../actions/reply.action";
library.add(far, faTrashCan );

export const DeleteReply = (reply) => {

    const dispatch = useDispatch();
    const deleteQuote = () => dispatch(deleteReply(reply.idObject))

    return(
        <div onClick={() =>{
            if (window.confirm("Voulez-vous supprimer ce Reply ?")) { 
                deleteQuote();
            }
        }}>
             <FontAwesomeIcon icon={["far", "trash-can"]} />
        </div>
    );
   
}

export default DeleteReply;