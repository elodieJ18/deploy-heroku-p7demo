import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = (uid) => {
    return (dispacth) => {
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/auth/${uid}`)
        .then((res) => {
            dispacth({ type: GET_USER, payload: res.data})
        })
        .catch((err) => console.log(err));
    }
}