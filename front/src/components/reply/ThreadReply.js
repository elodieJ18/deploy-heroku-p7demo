import React, { useEffect, useState } from "react";
import "../../css/styles.css";
import profil from "../../assets/user-200.png";
import { getAllReply } from "../../actions/reply.action";
import { useDispatch, useSelector } from "react-redux";


export const ThreadReply = () => {
    const [loadReply, setLoadReply] = useState(true);
    const dispatch = useDispatch();
    const reply = useSelector((state) => state.replyReducer);
    
    useEffect(() => {
        if (loadReply) {
            dispatch(getAllReply());
            setLoadReply(false)
        }
    }, [loadReply, dispatch])
    
  return (
   <div>
      <div className="home-actuality">
      <div className="home-card-post">
            {(reply?.[0]) &&
            reply.map((reply, idObject) => {
                return <li>{reply.message}</li> 
            })
        }
        </div>
        
        </div>
        </div>
       
  );
}

export default ThreadReply;