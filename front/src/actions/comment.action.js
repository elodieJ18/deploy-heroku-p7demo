import axios from "axios";

export const GET_COMMENT = "GET_COMMENT";
export const LIKE_COMMENT = "LIKE_POST";
export const UNLIKE_COMMENT = "UNLIKE_POST";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

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

export const updateComment = (idObject, message) => {
    return (dispatch) => {
        return axios ({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/comment/${idObject}`,
            data: { message }
        }).then((res) => {
            dispatch({type: UPDATE_COMMENT, payload: res.data})
        }).catch((err) => console.log(err)) 
    }
}


export const deleteComment = (idObject) => {
    return (dispatch) => {
        return axios ({
            method: "delete",
            url: `${process.env.REACT_APP_API_URL}api/comment/${idObject}`,
            data: {idObject}
        })
        .then((res) => {
            dispatch({ type: DELETE_COMMENT, payload: {idObject}})
            window.location = "/";
        })
        .catch((err) => console.log(err));

    }
}








