import { GET_ALL_REPLY } from "../actions/reply.action";

const initialState = {};

export default function getAllReply(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REPLY:
      return action.payload;
    default:
      return state;
  }
}