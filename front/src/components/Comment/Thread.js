import React, { useEffect, useState } from "react";
import "../../css/styles.css";
import profil from "../../assets/user-200.png";
import { getComment } from "../../actions/comment.action";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";

const testdoble = (comments) => {
console.log(comments);
return true;
} 

export const Thread = () => {
    const [loadComment, setLoadComment] = useState(true);
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.commentReducer);
    
    useEffect(() => {
        if (loadComment) {
            dispatch(getComment());
            setLoadComment(false)
        }
    }, [loadComment, dispatch])
    
    
  return (
   <div>
      <div className="home-actuality">
      <div className="home-card-post">
            {(comments[0]) && testdoble(comments) && comments.map((comment, idObject) => {
                return <Card comment={comment} key={idObject}/>
            })
        }
        </div>
        
        </div>
        </div>
       
  );
}

export default Thread;