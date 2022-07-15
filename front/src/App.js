import "./App.css";
import React from "react";
import Route from './components/Route';
import axios from "axios";

function App() {

  axios({
    method: "get",
    url: `${process.env.REACT_APP_API_URL}jwtid`, 
    withCredentials: true, 
  }).then((res) => {
    console.log(res);
    console.log(res.data)
  })
  .catch((err) => console.log("No token"))

  return (
    <div> 
      <Route/>
    </div> 
  );
}

export default App;
