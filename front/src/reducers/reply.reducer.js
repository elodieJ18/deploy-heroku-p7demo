import { GET_ALL_REPLY } from "../actions/reply.action";
import { UPDATE_REPLY } from "../actions/reply.action";
import { DELETE_REPLY } from "../actions/reply.action";


const initialState = {};

export default function getAllReply(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REPLY:
      return action.payload;
      case UPDATE_REPLY:
        return state.map((reply) => {
          if (reply.id === action.payload.id){
            return {
              ...reply,
              message: action.payload.message
            };
          } else return reply;
        })
      case DELETE_REPLY:
      return state.map((reply) => reply.idObject === action.payload.idObject) 
    default:
      return state;
  }
}