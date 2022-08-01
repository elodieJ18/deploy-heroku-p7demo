import React, { useEffect, useState } from "react";
import "../../css/styles.css";
import profil from "../../assets/user-200.png";
import { getAllReply } from "../../actions/reply.action";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/user-200.png";
import {isEmpty, dateParser} from "../Utils";
import CardReply from "./CardReply";

const testreply = (replys) => {
    console.log(replys);
    return true;
}

export const ThreadReply = (reply) => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadReply, setLoadReply] = useState(true);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const replys = useSelector((state) => state.replyReducer);

    useEffect(() => {
        if (loadReply) {
            dispatch(getAllReply());
            setLoadReply(false)
        };
        !isEmpty(usersData?.[0]) && setIsLoading(false);
    }, [loadReply, usersData, dispatch])

  return (
   <div>
      <div className="home-card-actuality">
      <div className="home-card-post">
            {<div reply={reply} key={reply.idObject}>
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
                </div> 
            }
        
        </div>

        </div>
        </div>

  );
}

export default ThreadReply;