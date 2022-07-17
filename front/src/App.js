import "./App.css";
import React from "react";
import Route from './components/Route';
import axios from "axios";
import { token } from "morgan";
import { EmailJSResponseStatus } from "@emailjs/browser";

function App() {

      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })  .then(function (response) {
        console.log(response.data);
        return response.data;
    })
      .then((res) => {
        if (res.error) { 
          console.log(res.error);
          alert("The response data is invalid")
        } })
        .catch((err) => {
          console.log("No token")
          let errorMessage = typeof err.response !== "undefined" ? err.response.data.message : err.message;
          alert(errorMessage);
        });
 


  return (
    <div> 
      <Route/>
    </div> 
  );
}

export default App;
