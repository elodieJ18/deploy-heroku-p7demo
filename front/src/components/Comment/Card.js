import React, { useState, useEffect } from "react";
import { useDispatch, useSelector,} from "react-redux";
import "../../css/styles.css";
import logo from "../../assets/user-200.png";
import {isEmpty, dateParser} from "../Utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faThumbsUp, faThumbsDown, faComment, faPenToSquare, faHeart } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { getComment, updateComment } from "../../actions/comment.action";
import { getAllReply, updateReply } from "../../actions/reply.action";
import { likesComment } from "../../actions/likes.action";
import { DeleteCard } from "./DeleteCard";
import { DeleteReply } from "./DeleteReply";
import NewReply from "./NewReply";
library.add(fas, far, faThumbsUp, faThumbsDown, faComment, faPenToSquare, faHeart);

export const Card = ({comment}) => {
    const [isUpdated, setIsUpdated] = useState(false);
    const [isUpdatedReply, setIsUpdatedReply] = useState(false);
    const [textUpdate, setTextUpdate] = useState(null);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
    const replyData = useSelector((state) => state.replyReducer);
    const likesData = useSelector((state) => state.likesReducer);
    const [openReply, setOpenReply] = useState(true);
    const dispatch = useDispatch();

   {/*lecture des tableaux message et likes */}
    const returnReply = (commentId) => {
      return replyData.filter(reply => reply.idComment === commentId).length;
    };
    
    const returnLikes = (commentId) => {
      return Array.from(likesData).filter(likes => likes.idComment === commentId).length;
    };

    const userLiked = () => {
      return Array.from(likesData).filter(likes => likes.id === userData.id && likes.idComment === comment.idObject).length;
     
    };


    


    const handleLikes = async() => {
      let id = comment.id;
      let idComment = comment.idObject;
      //e.preventDefault();
          await dispatch(likesComment(id, idComment)) .then(() => 
            dispatch(getComment()));
  };
   
   const updateItemComment = async () => {
    if (textUpdate) {
      await dispatch(updateComment(comment.idObject, textUpdate)).then(() => 
      dispatch(getComment()))
    }
    setIsUpdated(false)
   }


   console.log(likesData.id);
   console.log(userData.id);
   

 

  return ( 
 
    /*Appelle de notre commentaire avec pour chaque son "key" => idObject */
    <div className="home-card-container" key={comment.idObject} >
        <div className="home-card-userProfil">
          {/*Affichage des informations de l'user qui a posté */}
          {/*Je fais un map de tout les users pour trouver celui qui correspond */}
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

            {/*Affichage des informations du commentaire (du post mais j'ai mal appelé depuis le début)*/}
            <div className="home-card-modify-comment">
              {/*Affichage des modifications du commentaire si l'user en ai propriété: Avec la condition "isUpdate"
                si l'on clique sur la crayon ça propose de modifier le text; 
                sinon supprimer le commentaire*/}
                {comment.id === userData.id && (
                  <div className="icon-modifier">
                      <div onClick={() => setIsUpdated(!isUpdated)}>
                        <FontAwesomeIcon icon={["far", "pen-to-square"]} />
                      </div>
                      <DeleteCard idObject={comment.idObject}/> 
                  </div>
                )}
            </div>
        </div>

        <div className="home-card-description">
          {/*image du commentaire*/} 
            {isUpdated === false && <p>{comment.message}</p>}
          {/*Le formulaire de modification du commentaire*/}
            {isUpdated && (
              <div className="updateComment">
                  <textarea
                  defaultValue={comment.message}
                  onChange={(e) => setTextUpdate(e.target.value)}/>
                  <div className="button-UpdateComment">
                      <div className="btn-update-comment" onClick={updateItemComment}>
                        <p>Save modification</p>
                      </div>
                  </div>
              </div>
            )}
            {comment.image && (
              <div className="home-image-post-container">
                <img className="home-image-post" src={comment.image}/> 
              </div>)}
        </div>
     
      {/*Reaction au commentaire Like/Reply*/}
      <div className="home-card-reaction">
          <div className="home-card-reaction-container">
              <div className="comment-and-numbers">
                <div className="home-icon"  onClick={handleLikes}>
                    <div>
                     {userLiked(comment.idObject)} 
                      </div>
                   </div>
                  <span>
                    <p>{returnLikes(comment.idObject)}</p>
                  </span>
              </div> 
              <div className="comment-and-numbers">
                  {/*Toggle pour le reply */}
                  <p className={!openReply ? "active-comment" : "home-icon-post"} onClick={() => setOpenReply(!openReply) }>
                    <FontAwesomeIcon icon={["fa", "comment"]} />
                  </p>
                  {/*Lecture du nombres de reply */}
                  <span>
                    <p>{returnReply(comment.idObject)}</p>
                  </span>
              </div>
           </div>
      </div>

    {/*Toggle ouvert pour le reply.map()*/}
        {openReply === false && (
        <>
        <NewReply/>       
      <div className="home-cardReply-userProfil">
        <div className="home-card-userStatus">
           <div className="home-card-usersStatus-second-col">{
                !isEmpty(replyData[0]) &&
                replyData
                  .map((reply) => {
                    if (comment.idObject === reply.idComment ) return <div key={reply.idObject}>
             <div>
               <div className="home-card-actuality">
                  <div className="home-card-post">
                          {<div >
                             <div className="home-cardreply-container">
                                <div className="home-cardreply-userProfil">
                                  <div className="image-profil-container-home">
                                    <div className="image-profil-form-home-reply">
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
                                  <div className="home-card-userStatus-reply">
                                  <div className="home-card-usersStatus-second-col">
                                    <div className="home-profil-names-reply">
                                      <div className="home-profil-names-and-status-reply"> 
                                        <div className="home-profil-names-container-reply">
                                            <p className="home-cardreply-description-name">{
                                                  !isEmpty(usersData[0]) &&
                                                  usersData
                                                    .map((user) => {
                                                      if (user.id === reply.id) return user.prenom;
                                                      else return null;
                                                    })
                                                    .join("")
                                                }
                                            </p>
                                            <p className="home-cardreply-description-name">{
                                                  !isEmpty(usersData[0]) &&
                                                  usersData
                                                    .map((user) => {
                                                      if (user.id === reply.id) return user.nom;
                                                      else return null;
                                                    })
                                                    .join("")
                                                }
                                            </p> 
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
                                                }
                                            </p>  
                                        </div> 
                                    </div>
                                     <p className="home-card-description-date">{dateParser(reply.date)}</p>
                                    </div> 
                                              {/*Affichage des informations des reply*/}
                                                    <div className="home-card-modify-reply">

                                            {/*Affichage des modifications du commentaire si l'user en ai propriété: Avec la condition "isUpdate"
                                            si l'on clique sur la crayon ça propose de modifier le text; 
                                              sinon supprimer le commentaire*/}
                                              {( reply.id === userData.id ) &&  (
                                                    <div className="icon-modifier">
                                                      < DeleteReply idObject={reply.idObject}/> 
                                                    </div>
                                                  )}

                                                  </div>
                                                  </div>
                                                  <div >

                                                  {/*image du commentaire*/}
                                              <p>{reply.message}</p>

                                                  {/*Le formulaire de modification du commentaire*/}
                                              

                                            <div className="home-cardreply-description">
                                              {reply.image && (<div className="home-image-post-container"><img className="home-image-post" src={reply.image}/> 
                                            </div>)}
                                    </div>
                                  </div>
                                  </div>
                                </div>  
                              </div>  
                          </div> 
                          }
                      </div>
                    </div>
                  </div>
                </div>
              else return null
              })
            }
          </div>  
        </div>
      </div>
      </>
      )}
    </div>  
  );
}

export default Card;