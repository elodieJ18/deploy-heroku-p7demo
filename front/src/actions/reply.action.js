import axios from "axios";

export const GET_ALL_REPLY = "GET_ALL_REPLY";

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