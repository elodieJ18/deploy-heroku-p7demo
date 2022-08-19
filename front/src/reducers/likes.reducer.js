import { GET_ALL_LIKE } from "../actions/likes.action";

const initialState = {};

export default function getAllLike(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_LIKE:
      return action.payload;
    default:
      return state;
  }
}