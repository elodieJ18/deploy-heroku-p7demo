import "./App.css";
import { Component } from "react";
import Signup from "./log/Signup";
import Login from "./log/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Connexion from "./log/Connexion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Connexion />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
