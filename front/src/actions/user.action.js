import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_INFO = "UPDATE_INFO";
export const DELETE_PROFIL = "DELETE_PROFIL"


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
        return axios ({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/auth/`+ id,
            data: data,
            body: JSON.stringify(data),
        })
        .then((res) => {
            dispatch({type: UPDATE_INFO, payload: data})
          }).catch((err) => console.log(err))
        
    }}

export const updateInfo = (id, nom, prenom, status) => {
    return (dispatch) => {
        return axios ({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/auth/` + id,
            data: { nom, prenom, status}
        }).then((res) => {
            dispatch({type: UPDATE_INFO, payload: {nom, prenom, status}})
        }).catch((err) => console.log(err))
        
    }
}


export const deleteProfil = (uid) => {
    return (dispatch) => {
        return axios
        .delete(`${process.env.REACT_APP_API_URL}api/auth/${uid}`)
        .then((res) => {
            dispatch({ type: GET_USER, payload: res.data})
            window.location = "/";
        })
        .catch((err) => console.log(err));

    }
}
