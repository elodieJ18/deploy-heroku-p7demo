import { LIKE_COMMENT } from "../actions/comment.action";
import { GET_ALL_REPLY } from "../actions/reply.action";

const initialState = {};

export default function getAllReply(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REPLY:
      return action.payload;
    case LIKE_COMMENT:
      return state.map((comment) => {
        if (comment.idObject === action.payload.idObject) {
          return {
            ...comment,
            likes: [action.payload.uid, ...comment.likes]
          }
        }
      })
    default:
      return state;
  }
}