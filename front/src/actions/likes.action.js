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


export const likesComment = (data, dispatch) => {
    return axios
       .post(`${process.env.REACT_APP_API_URL}api/likes/`, data)  
       .then((res) => {
        dispatch({ type: LIKES_COMMENT, payload: res.data})
    })
    .catch((err) => console.log(err)); 
}


