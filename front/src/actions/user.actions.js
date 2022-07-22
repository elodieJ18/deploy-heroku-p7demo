import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_INFO = "UPDATE_INFO";

export const getUser = (uid) => {
    return (dispatch) => {
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/auth/${uid}`)
        .then((res) => {
            dispatch({ type: GET_USER, payload: res.data})
        })
        .catch((err) => console.log(err));
    }
}

export const uploadPicture = (data, id) => {
    return (dispatch) => {
       return axios
    .post(`${process.env.REACT_APP_API_URL}api/auth/profil`, data)
    .then((res) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/auth/${id}`)
            .then((res) => {
                dispatch({type: UPLOAD_PICTURE, payload: res.data.picture} )
            })
            .catch(err => console.log(err));
    }) 
    }
};

export const updateInfo = (userId, status) => {
    return (dispatch) => {
        return axios ({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/auth/` + userId,
            data: {status}
        }).then((res) => {
            dispatch({type: UPDATE_INFO, payload: status})
        }).catch((err) => console.log(err))
        
    }
}