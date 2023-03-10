import axios from "axios";

export const GET_COMMENT = "GET_COMMENT";
export const CREATE_COMMENT = "CREATE_COMMENT";
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


export const updateComment = (idObject, message, image) => {
    return (dispatch) => {
        return axios ({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/comment/${idObject}`,
            data: { message, image },
            body: JSON.stringify(image),
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
        })
        .catch((err) => console.log(err));

    }
}


export const createComment = (data) => {
    return (dispatch) => {
        return axios ({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/comment/upload`,
            data: data
        })  
       .then((res) => {
        dispatch({ type: CREATE_COMMENT, payload: data})
        
    })
    .catch((err) => console.log(err)); 
    }  
}









