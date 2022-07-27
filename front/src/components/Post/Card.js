import React, { useState, useEffect } from "react";
import { useSelector,} from "react-redux";
import "../../css/styles.css";
import logo from "../../assets/user-200.png";


export const Card = ({comment}) => {
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
   

  return (
    <div className="home-card-container" key={comment.id}>
    
      <div className="home-card-userProfil">
        <img src={(usersData?.[0] && usersData.map((user) => {
            if (comment.id === user.id){
                console.log("test")
                console.log(user.id)
                 return user.image;
            } else return logo;
            })
            .joint("")
            )} alt="profil-pic" />
        <div className="home-card-userStatus">
        <div className="home-card-usersStatus-second-col">
          <p className="home-card-description-name">{(usersData?.[0] && usersData.map((user) => {
            if (user.id === comment.id){
                 return user.nom;
            } else return logo;
            })
            .joint("")
            )}</p>
          <p className="home-card-description-status">{(usersData?.[0] && usersData.map((user) => {
            if (user.id === comment.id){
                console.log("test")
                 return user.status;
            } else return logo;
            })
            .joint("")
            )}</p> 
        </div>
        <div className="home-card-usersStatus-second-col"> 
          <p className="home-card-description-date">{comment.date}</p>
          </div> 
        </div>
      </div>
      <div className="home-card-description">
          <p>{comment.message}</p>
      </div>
      <div className="home-card-reaction">
          icons
      </div>
    </div>
  
       
  );
}

export default Card;