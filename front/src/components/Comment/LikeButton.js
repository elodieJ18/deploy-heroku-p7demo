import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector,} from "react-redux";
import "../../css/styles.css";
import logo from "../../assets/user-200.png";
import {isEmpty, dateParser} from "../Utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faThumbsUp, faThumbsDown, faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { UidContext } from "../AppContext";
import { likeComment } from "../../actions/comment.action";
library.add(fas, far, faThumbsUp, faThumbsDown, faComment, faHeart);

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
        if (comment.likes?.includes(uid)) setLiked(true)
    }, [uid], comment.likes, liked)

  return (
   <div>
    {uid && liked === false && (
         <FontAwesomeIcon className="heartEmpty" icon={["fa","heart"]} onClick={like} />
    )}
    {uid && liked && (
         <FontAwesomeIcon className="heartFull" icon={["fa","heart"]} onClick={unlike} />
    )}

   </div>
  );
}

export default LikeButton;