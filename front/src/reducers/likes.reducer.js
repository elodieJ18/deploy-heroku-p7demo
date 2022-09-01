import { GET_ALL_LIKE } from "../actions/likes.action";
import { LIKES_COMMENT } from "../actions/likes.action";

const initialState = {};

export default function likesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_LIKE:
      return action.payload;
      case LIKES_COMMENT:
            return {
              ...state,
              data: action.payload.data,
              id: action.payload.id,
              idComment: action.payload.idComment,
            };
    default:
      return state;
  }
}