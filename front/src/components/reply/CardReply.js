import React, { useState, useEffect } from "react";
import { useSelector,} from "react-redux";
import "../../css/styles.css";
import logo from "../../assets/user-200.png";
import {isEmpty, dateParser} from "../Utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far, faThumbsUp, faThumbsDown, faComment);

export const CardReply = ({reply}) => {
    
  const [isLoading, setIsLoading] = useState(true);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
   
    useEffect(() => {
      !isEmpty(usersData?.[0]) && setIsLoading(false);
    }, [usersData])
    

    

  return (
    <div className="home-cardreply-container" key={reply.idObject} >
    
      <div className="home-cardreply-userProfil">
        <div className="image-profil-container-home">
          <div className="image-profil-form-home">
            <img className="user-name-image" 
                  src={
                    !isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user.id === reply.id) return user.image === null || user.image === 'undefined' ? logo : user.image;
                      })
                      .join("")
                  }
                  alt="poster-pic"
                />
          </div>
        </div>
        <div className="home-card-userStatus">
        <div className="home-card-usersStatus-second-col">
          <div className="home-profil-names">
          <p className="home-cardreply-description-name">{
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user.id === reply.id) return user.prenom;
                    else return null;
                  })
                  .join("")
              }</p>
                <p className="home-cardreply-description-name">{
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user.id === reply.id) return user.nom;
                    else return null;
                  })
                  .join("")
              }</p>
          </div> 
        
          <div className="home-card-usersStatus-second-col"> 
                <p>{
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user.id === reply.id) return user.status;
                    else return null;
                  })
                  .join("")
              }</p>
                <p className="home-card-description-date">{dateParser(reply.date)}</p>
          </div>  
        </div>
        </div>
      </div>
      <div className="home-cardreply-description">
          {reply.image && (<div className="home-image-post-container"><img className="home-image-post" src={reply.image}/> </div>)}
          <p>{reply.message}</p>
      </div>
     

    </div>  
  );
}

export default CardReply;