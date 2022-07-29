import React, { useEffect, useState } from "react";
import "../../css/styles.css";
import profil from "../../assets/user-200.png";
import { getComment } from "../../actions/comment.action";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";


export const Thread = () => {
    const [loadComment, setLoadComment] = useState(true);
    const dispatch = useDispatch();
    const comment = useSelector((state) => state.commentReducer);
    
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
            {(comment[0]) &&
            comment.map((comment, id) => {
                return <Card comment={comment} key={id}/>
            })
        }
        </div>
        
        </div>
        </div>
       
  );
}

export default Thread;