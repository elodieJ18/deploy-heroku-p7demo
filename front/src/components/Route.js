import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "Navbar";

const index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
