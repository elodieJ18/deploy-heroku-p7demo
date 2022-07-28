import React, { useState, useEffect } from "react";
import { useSelector,} from "react-redux";
import "../../css/styles.css";
import logo from "../../assets/user-200.png";
import isEmpty from "../Utils";


useEffect(() => {
  
  !isEmpty(userData) && setIsLoading(false)

})

const returnimage = (userData, comment) => {
  debugger;
  if (userData.id === comment.id){
    console.log("user");
       return userData.image;
  } else return logo;
}


export const Card = ({comment}) => {
    
  const [isLoading, setIsLoading] = useState(true);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
   const userId = userData.id;
   const commentId = comment.id;

  return (
    <div className="home-card-container" key={comment.id}>
    
      <div className="home-card-userProfil">
        <img src={isLoading ?  
          returnimage(userData, comment) : ""} alt="profil-pic" />
        <div className="home-card-userStatus">
        <div className="home-card-usersStatus-second-col">
          <p className="home-card-description-name"></p>
          <p className="home-card-description-status"></p> 
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