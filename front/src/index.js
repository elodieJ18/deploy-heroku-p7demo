import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import { getUsers } from "./actions/users.action";
import { getAllReply } from "./actions/reply.action";
import { getComment } from "./actions/comment.action";
import thunk from "redux-thunk";
import rootReducer from './reducers'

//dev tools
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const store =  createStore(
  rootReducer, (applyMiddleware(thunk, logger))
)

store.dispatch(getUsers());
store.dispatch(getComment());
store.dispatch(getAllReply());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

