import { DELETE_COMMENT, GET_COMMENT} from "../actions/comment.action";
import { UPDATE_COMMENT } from "../actions/comment.action";

const initialState = {};
export default function commentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COMMENT: 
        return action.payload;
        case UPDATE_COMMENT:
          return state.map((comment) => {
            if (comment.id === action.payload.id){
              return {
                ...comment,
                message: action.payload.message
              };
            } else return comment;
          }) 
      case DELETE_COMMENT:
        return state.map((comment) => comment.idObject === action.payload.idObject)
      default:
        return state;
           
    }
}