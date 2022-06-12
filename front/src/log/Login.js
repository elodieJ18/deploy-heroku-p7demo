import React from "react";
import "../styles/style.css";
import logo from "../assets/logo-groupomania.png";

function Login() {
  return (
    <div className="form-signup-content">
      <div className="navbar">
        <img className="logo" src={logo} alt="groupomania" />
      </div>
      <div className="form-signup-element">
        <h1>Sign-Up</h1>
        <div className="from-signup">
          <form>
            <label for="email">
              <b>email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />

            <label for="psw">
              <b>password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <div class="clearfix">
              <a type="submit" class="btn-bleu">
                Login
              </a>
              <a class="btn-blanc" href="/">
                cancel
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
