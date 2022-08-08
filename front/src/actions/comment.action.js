import axios from "axios";

export const GET_COMMENT = "GET_COMMENT";
export const LIKE_COMMENT = "LIKE_POST";
export const UNLIKE_COMMENT = "UNLIKE_POST";

export const getComment = (uid) => {
    return (dispatch) => {
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/comment/`)
        .then((res) => {
            dispatch({ type: GET_COMMENT, payload: res.data})
        })
        .catch((err) => console.log(err));
    }
}

export const likeComment = (idObject, uid) => {
    return (dispatch) => {
        return axios
        .post(`${process.env.REACT_APP_API_URL}api/comment/` + uid + `/like`)
        .then((res) => {
            dispatch({ type: LIKE_COMMENT, payload: idObject, uid})
        })
        .catch((err) => console.log(err));
    }
}








