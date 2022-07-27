import axios from "axios";

export const GET_COMMENT = "GET_COMMENT";

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








