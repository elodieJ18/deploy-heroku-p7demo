import React, { useState, useEffect } from "react";
import { useSelector,} from "react-redux";
import "../../css/styles.css";
import profil from "../../assets/user-200.png";
import { isEmpty } from '../Utils';

export const Card = ({comment}) => {
    const usersData = useSelector((state) => state.userSReducer);
    const userData = useSelector((state) => state.userReducer);

  return (
    <div className="home-card-container" key={comment.id}>
    
      <div className="home-card-userProfil">
        <img /*src={!isEmpty(usersData[0] && usersData.map((user) => {
            if (usersData.id === comment.id){
                 return user.image;
            } else return null;
            })
            .joint("")
            )} alt="profil-pic"*/ />
        <div className="home-card-userStatus">
        <div className="home-card-usersStatus-second-col">
          <p className="home-card-description-name">Name</p>
          <p className="home-card-description-status">Status</p> 
        </div>
        <div className="home-card-usersStatus-second-col"> 
          <p className="home-card-description-date">Date</p>
          </div> 
        </div>
      </div>
      <div className="home-card-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="home-card-reaction">
          icons
      </div>
    </div>
  
       
  );
}

export default Card;