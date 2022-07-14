import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Profil from '../pages/Profil';


const index = () => {
  return (
    <BrowserRouter> 
      <Routes>      
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Profil />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
