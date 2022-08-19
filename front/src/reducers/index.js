import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";
import commentReducer from "./comment.reduceur";
import replyReducer from "./reply.reducer";
import likesReducer from "./likes.reducer";
export default combineReducers({
    userReducer,
    usersReducer,
    commentReducer,
    replyReducer,
    likesReducer

})