import React, { useState, useEffect } from "react";
import { useDispatch, useSelector,} from "react-redux";
import "../../css/styles.css";
import logo from "../../assets/user-200.png";
import {isEmpty, dateParser} from "../Utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faThumbsUp, faThumbsDown, faComment, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import LikeButton from "./LikeButton";
import { getComment, updateComment } from "../../actions/comment.action";
library.add(fas, far, faThumbsUp, faThumbsDown, faComment, faPenToSquare);

export const Card = ({comment}) => {
    const [isUpdated, setIsUpdated] = useState(false);
    const [textUpdate, setTextUpdate] = useState(null);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
    const replyData = useSelector((state) => state.replyReducer);
    const dispatch = useDispatch();
   
   const updateItemComment = async () => {
    if (textUpdate) {
      await dispatch(updateComment(comment.idObject, textUpdate)).then(() => 
      dispatch(getComment()))
    }
    setIsUpdated(false)
   }
    
  return (
    <div className="home-card-container" key={comment.idObject} >
    
      <div className="home-card-userProfil">
        <div className="home-card-left-part">
            <div className="image-profil-container-home">
              <div className="image-profil-form-home">
                <img className="user-name-image" 
                      src={
                        !isEmpty(usersData[0]) &&
                        usersData
                          .map((user) => {
                            if (user.id === comment.id) return user.image === null || user.image === 'undefined' ? logo : user.image;
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
                    <p className="home-card-description-name">{
                    !isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user.id === comment.id) return user.prenom;
                        else return null;
                      })
                      .join("")
                  }</p>
                    <p className="home-card-description-name">{
                    !isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user.id === comment.id) return user.nom;
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
                        if (user.id === comment.id) return user.status;
                        else return null; 
                      })
                      .join("")
                  }</p>
                    <p className="home-card-description-date">{dateParser(comment.date)}</p>
              </div>  
            </div>
            </div>
        </div>
        <div className="home-card-modify-comment">
          {comment.id === userData.id && (
            <div onClick={() => setIsUpdated(!isUpdated)}>
              <FontAwesomeIcon icon={["far", "pen-to-square"]} />
            </div>
          )}
        </div>
      </div>
      <div className="home-card-description">
          {comment.image && (<div className="home-image-post-container"><img className="home-image-post" src={comment.image}/> </div>)}
          {isUpdated === false && <p>{comment.message}</p>}
          {isUpdated && (
            <div className="updateComment">
              <textarea
              defaultValue={comment.message}
              onChange={(e) => setTextUpdate(e.target.value)}/>
              <div className="button-UpdateComment">
                <button onClick={updateItemComment}> Valider modification</button>
              </div>
          
            </div>
          )}
      </div>
     

      <div className="home-card-reaction">
          <div className="home-card-reaction-container">
              <p className="home-icon-post"><LikeButton comment={comment} /></p>
              <p className="home-icon-post"><FontAwesomeIcon icon={["fa", "comment"]} /></p>
              <span></span>
           </div>
      </div>


     
      <div className="home-cardReply-userProfil">
        <div className="home-card-userStatus">
           <div className="home-card-usersStatus-second-col">{
                !isEmpty(replyData[0]) &&
                replyData
                  .map((reply) => {
                    console.log(replyData);
                    if (comment.idObject === reply.idComment ) return <div key={reply.idObject}><div>
                    <div className="home-card-actuality">
                    <div className="home-card-post">
                          {<div >
                             <div className="home-cardreply-container">
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
                      </div>;
                    else return null;
                  })
              }
          </div>  
        </div>
      </div>
    </div>  
  );
}

export default Card;