import React, { useState } from "react";
import "../styles/style.css";
import logo from "../assets/logo-groupomania.png";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: email,
      password,
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/home";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-signup-content">
      <div className="navbar">
        <img className="logo" src={logo} alt="groupomania" />
      </div>
      <div className="form-signup-element">
        <h1>Login</h1>
        <div className="from-signup">
          <form action="" onSubmit={handleLogin} id="login-form">
            <label htmlFor="email">
              <b>email</b>
            </label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <div className="email error"></div>
            <label htmlFor="password">
              <b>password</b>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <div className="password error"></div>
            <div className="clearfix">
              <input type="submit" value="Login" className="btn-bleu" />
              <a className="btn-blanc" href="/">
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
