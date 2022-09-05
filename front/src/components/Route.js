import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Mycomment from "../pages/Mycomment";
import Profil from '../pages/Profil';


const index = () => {
  return (
    <BrowserRouter> 
      <Routes>      
        <Route path="/" element={<Home />}></Route>
        <Route path="/profil" element={<Profil />}></Route>
        <Route path="/mycomment" element={<Mycomment />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
