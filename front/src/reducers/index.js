import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import commentReducer from "./comment.reduceur";
export default combineReducers({
    userReducer,
    commentReducer,
})