import "./App.css";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Connexion />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
