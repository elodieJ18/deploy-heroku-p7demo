import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="" element=""></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
