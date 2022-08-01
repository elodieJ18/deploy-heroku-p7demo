import React, { useState, useEffect } from "react";
import { useSelector,} from "react-redux";
import "../../css/styles.css";
import logo from "../../assets/user-200.png";
import {isEmpty, dateParser} from "../Utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {ThreadReply} from "../reply/ThreadReply";
import { fas, faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, faThumbsUp, faThumbsDown, faComment);

export const LikeButton = ({comment}) => {
    
  return (
   <div>
    <FontAwesomeIcon icon={["fa","thumbs-up"]} />
   </div>
  );
}

export default LikeButton;