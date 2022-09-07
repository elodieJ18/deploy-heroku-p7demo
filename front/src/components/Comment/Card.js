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
import { getAllReply, createReply } from "../../actions/reply.action";
import { likesComment, getAllLike } from "../../actions/likes.action";
import { DeleteCard } from "./DeleteCard";
import { DeleteReply } from "../Comment/Reply/DeleteReply";
library.add(fas, far, faThumbsUp, faThumbsDown, faComment, faPenToSquare, faHeart);




export const Card = ({comment}) => {
    const [isUpdated, setIsUpdated] = useState(false);
    const [textUpdate, setTextUpdate] = useState(null);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
    const replyData = useSelector((state) => state.replyReducer);
    const [openReply, setOpenReply] = useState(true);
    const [uploadImg, setUploadImg] = useState();
    const dispatch = useDispatch();



 {/*function for NewReply */}
    const [message, setMessage] = useState('');
    const [uploadImgReply, setUploadImgReply] = useState();
    const [fileReply, setFileReply] = useState();
    
 
    const handleReply =  async(e) => {
      e.preventDefault();
        if (message || uploadImgReply ) {
          
          const data = new FormData();
          
          data.append("id", userData.id);
          data.append("idComment", comment.idObject);
          data.append("message", message);
          data.append("image", fileReply);
          console.log(data);
          console.log(fileReply);
        dispatch(createReply(data)).then(() =>
        dispatch(getAllReply()))
        setMessage('');
        setUploadImgReply('');
       ;
        
        } else {
            alert("veuillez entrer un message")
        }  
    };

   
    
    const handleImgReply = (e) => {
        setUploadImgReply(URL.createObjectURL(e.target.files[0]));
        setFileReply(e.target.files[0]);
    };

    const cancelImgReply = () => {
        setUploadImgReply('');
    };
      
    const returnReply = (commentId) => {
      return Array.from(replyData).filter(reply => reply.idComment === commentId).length;
    };
    





   {/*LIKES - lecture des tableaux message et likes */}
   const likesData = useSelector((state) => state.likesReducer);

    const handleLikes = async () => {
        let id = userData.id;
        let idComment = comment.idObject;
          dispatch(likesComment(id, idComment)).then(() =>  
          dispatch(getAllLike()))
    };

    const isLiked = () => {
      return Array.from(likesData).filter(likes => likes.id === userData.id && likes.idComment === comment.idObject).length > 0;
     };
     
     const returnLikes = (commentId) => {
      return Array.from(likesData).filter(likes => likes.idComment === commentId).length;
    };

   
   

  
  {/*Commentaire update*/}
   
   const updateItemComment = async () => {
    if (textUpdate) {
      await dispatch(updateComment(comment.idObject, textUpdate)).then(() => 
      dispatch(getComment()))
    }
    setIsUpdated(false)
   }
   
  
  {/*const [imageUpdate, setImageUpdate] = useState([]);
  const handleModifyComment = () => {
    setIsUpdated(true)
    setTextUpdate(comment.message)
    setImageUpdate(comment.image[0])
    dispatch(updateComment(comment.image, textUpdate))
  }
  console.log(imageUpdate);
console.log(comment.image);*/}

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
     



      {/*Like & Reply*/}
      <div className="home-card-reaction">
          <div className="home-card-reaction-container">
              <div className="comment-and-numbers">
                <div className="home-icon-post" onClick={() => handleLikes()} > 
                 
                      {
                      <FontAwesomeIcon className={`${isLiked(comment.idObject, likesData) ? "heartFull" : "heartEmpty"}`}  icon={["fa","heart"]} />
                      }
                 </div>
                      <span>
                        <p>{returnLikes(comment.idObject, likesData)}</p>
                      </span>
                 
               
              </div> 
              <div className="comment-and-numbers">
                  {/*Toggle pour le reply */}
                  <p className={!openReply ? "active-comment" : "home-icon-post"} onClick={() => setOpenReply(!openReply) }>
                    <FontAwesomeIcon className="iconEmpty" icon={["fa", "comment"]} />
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
        {/*NewReply test into map*/}   
          <div className="home-actuality-new-reply">
            <div className="home-card-container" > 
                <div className="home-card-description-reply">
                        <div className="image-profil-container-home">
                            <div className="image-profil-form-home-reply">
                                <img className="user-name-image" src={userData.image === null || userData.image === 'undefined' ? logo : userData.image}  alt="userimage"/>
                            </div>
                        </div>
                    <form >
                        <div className="new-post-text-and-picture"> 
                            <textarea name="message" id="message" placeholder="Je répond au post" onChange={(e) => setMessage(e.target.value)} value={message} />
                              <div className="new-post-picture">
                              <label htmlFor="fileReply"> <FontAwesomeIcon icon="camera" /></label>
                                <input  type="file" id="fileReply" name="image" accept=".jpg, .jpeg, .png" 
                                onChange={(e) => handleImgReply(e) }/>
                            </div>
                        </div>    
                                
                        <div>
                            {uploadImgReply ? (
                                <div className="img-comment-content">
                                <div className="img-comment-size img-comment-form">
                                    <img className="img-comment" src={uploadImgReply}  alt="imageComment"/>
                                </div> 
                                < FontAwesomeIcon icon="xmark" onClick={cancelImgReply}/>
                                </div>
                            ) : null

                            }
                        </div>
                        <div className="duo-update-btn-profil">
                            <button className="btn-update-comment" type="submit" onClick={handleReply}>Publish</button> 
                        </div> 
                    </form>
                </div>
            </div>
          </div>  


      <div className="home-cardReply-userProfil">
        <div className="home-card-userStatus">
           <div className="home-card-usersStatus-second-col home-card-post">{
                !isEmpty(replyData[0]) &&
                replyData
                  .map((reply) => {
                    if (comment.idObject === reply.idComment ) return <div key={reply.idObject} className="home-card-actuality" >
               <div >
                  <div >
                          {
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
                                            {( reply.id === userData.id ) &&  (
                                              <div className="icon-modifier">
                                                < DeleteReply idObject={reply.idObject}/> 
                                              </div>)}
                                        </div>
                                  </div>
                                        <div className="home-cardreply-description">
                                                    <div className="home-cardreply-description-text">
                                                        <p>{reply.message}</p>
                                                    </div> 
                                                    {reply.image && (<div className="home-image-reply-container"><img className="home-image-post" src={reply.image}/> 
                                                      </div>)}
                                        </div>
                                      </div>
                                  </div>  
                              </div>  
                         
                          }
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