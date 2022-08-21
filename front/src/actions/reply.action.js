import axios from "axios";

export const GET_ALL_REPLY = "GET_ALL_REPLY";
export const UPDATE_REPLY = "UPDATE_REPLY";
export const DELETE_REPLY = "DELETE_REPLY";

export const getAllReply = () => {
    return (dispatch) => {
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/reply/`)
        .then((res) => {
            dispatch({ type: GET_ALL_REPLY, payload: res.data})
        })
        .catch((err) => console.log(err));
    }
}

export const deleteReply = (idObject) => {
    return (dispatch) => {
        return axios ({
            method: "delete",
            url: `${process.env.REACT_APP_API_URL}api/reply/${idObject}`,
            data: {idObject}
        })
        .then((res) => {
            dispatch({ type: DELETE_REPLY, payload: {idObject}})
            window.location = "/";
        })
        .catch((err) => console.log(err));

    }
}


export const updateReply = (idObject, message) => {
    return (dispatch) => {
        return axios ({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/reply/${idObject}`,
            data: { message }
        }).then((res) => {
            dispatch({type: UPDATE_REPLY, payload: res.data})
        }).catch((err) => console.log(err)) 
    }
}
