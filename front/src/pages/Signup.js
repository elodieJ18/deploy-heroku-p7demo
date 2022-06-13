import React from "react";
import "../styles/style.css";
import logo from "../assets/logo-groupomania.png";

function Signup() {
  return (
    <div className="form-signup-content">
      <div className="navbar">
        <img className="logo" src={logo} alt="groupomania" />
      </div>
      <div className="form-signup-element">
        <h1>Sign-Up</h1>
        <div className="from-signup">
          <form>
            <div className="cart__order__form__question">
              <label htmlFor="first-name">
                <b>FirstName</b>
              </label>
              <input
                type="text"
                placeholder="FirstName"
                name="FirstName"
                id="firstName"
                required
              />
              <p id="firstNameErrorMsg"></p>
            </div>
            <div className="cart__order__form__question">
              <label htmlFor="LastName">
                <b>LastName</b>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                required
              />
              <p id="lastNameErrorMsg"></p>
            </div>

            <div className="cart__order__form__question">
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input type="text" placeholder="Email" name="email" required />
              <p id="emailErrorMsg"></p>
            </div>

            <div className="cart__order__form__question">
              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="psw"
                required
              />
            </div>

            <div className="clearfix">
              <button type="submit" class="btn-bleu-navy">
                sign up
              </button>
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

export default Signup;
