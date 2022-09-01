import axios from "axios";

export const GET_ALL_LIKE= "GET_ALL_LIKE";
export const LIKES_COMMENT = "LIKES_COMMENT";

export const getAllLike = () => {
    return (dispatch) => {
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/likes/`)
        .then((res) => {
            dispatch({ type: GET_ALL_LIKE, payload: res.data})
        })
        .catch((err) => console.log(err));
    }
}

export const likesComment = (id, idComment) => {
    return (dispatch) => {
        return axios ({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/likes/`,
            data: { id, idComment}
        })  
       .then((res) => {
        dispatch({ type: LIKES_COMMENT, payload: {id, idComment}})
        console.log({id, idComment})
    })
    .catch((err) => console.log(err)); 
    }   
}


