import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";
import commentReducer from "./comment.reduceur";
export default combineReducers({
    userReducer,
    usersReducer,
    commentReducer,
})