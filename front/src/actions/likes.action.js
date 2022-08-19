import axios from "axios";

export const GET_ALL_LIKE= "GET_ALL_LIKE";

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

/*export const likeComment = (idObject, uid) => {
    return (dispatch) => {
        return axios
        .post(`${process.env.REACT_APP_API_URL}api/comment/` + uid + `/like`)
        .then((res) => {
            dispatch({ type: LIKE_COMMENT, payload: idObject, uid})
        })
        .catch((err) => console.log(err));
    }
}*/