import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector,} from "react-redux";
import "../../css/styles.css";
import logo from "../../assets/user-200.png";
import {isEmpty, dateParser} from "../Utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { UidContext } from "../AppContext";
import { likeComment } from "../../actions/comment.action";
library.add(fas, far, faThumbsUp, faThumbsDown, faComment);

export const LikeButton = ({comment}) => {
    const [liked, setLiked] = useState(false);
    const uid = useContext(UidContext);
    const dispatch = useDispatch();

    const like = () => {
        dispatch(likeComment(comment.idObject, uid))
        setLiked(true)
    }
    const unlike = () => {}
    useEffect(() => {
        if (comment.likes.includes(uid)) setLiked(true)
    }, [uid], comment.likes, liked)

  return (
   <div>
    {uid && liked === false && (
         <FontAwesomeIcon className="thumbsEmpty" icon={["fa","thumbs-up"]} onClick={like} />
    )}
    {uid && liked && (
         <FontAwesomeIcon className="thumbsFull" icon={["fa","thumbs-up"]} onClick={unlike} />
    )}
   
   </div>
  );
}

export default LikeButton;