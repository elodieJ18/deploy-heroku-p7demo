import React, { useState, useEffect } from "react";
import { useSelector,} from "react-redux";
import "../../css/styles.css";
import logo from "../../assets/user-200.png";
import {isEmpty, dateParser} from "../Utils";

export const Card = ({comment}) => {
    
  const [isLoading, setIsLoading] = useState(true);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
   const userId = userData.id;
   const commentId = comment.id;

    useEffect(() => {
      !isEmpty(usersData?.[0]) && setIsLoading(false);
    }, [usersData])

    const returnimage = (userData, comment) => {
      if (userData.id === comment.id){
           return userData.image;
      } else return logo;
    }

    const returnNom = (userData, comment) => {
      if (userData.id === comment.id){
           return userData.nom;
      } else return "nom";
    }

    const returnPrenom = (userData, comment) => {
      if (userData.id === comment.id){
           return userData.prenom;
      } else return "prenom";
    }

    
    const returnStatus = (userData, comment) => {
      if (userData.id === comment.id){
           return userData.status;
      } else return "status";
    }

  return (
    <div className="home-card-container" key={comment.id}>
    
      <div className="home-card-userProfil">
        <div className="image-profil-container-home">
        <div className="image-profil-form-home">
          <img className="user-name-image" src={isLoading ?  
              returnimage(userData, comment) : ""} alt="profil-pic" />
        </div>
        </div>
        <div className="home-card-userStatus">
        <div className="home-card-usersStatus-second-col">
          <div className="home-profil-names">
                <p className="home-card-description-name">{isLoading ?  
                returnNom(userData, comment) : ""}</p>
                <p className="home-card-description-name">{isLoading ?  
                returnPrenom(userData, comment) : ""}</p>
          </div>   
          <div className="home-card-usersStatus-second-col"> 
                <p className="home-card-description-status">{isLoading ?  
                returnStatus(userData, comment) : ""}</p>
                <p className="home-card-description-date">{dateParser(comment.date)}</p>
          </div> 
          
        </div>
      
        </div>
      </div>
      <div className="home-card-description">

          {comment.image && (<div className="home-image-post-container"><img className="home-image-post" src={comment.image}/> </div>)}
  
      
          <p>{comment.message}</p>
      </div>
      <div className="home-card-reaction">
          icons
      </div>
    </div>
  
       
  );
}

export default Card;