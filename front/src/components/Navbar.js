import React from "react";
import "../css/styles.css";
import logo from "../assets/logo-groupomania.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faHomeLg, faComments, faUserPen, faCommentDots, faUser, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

library.add(fas, faHomeLg, faComments, faCommentDots,faUserPen, faUser, faCirclePlus);


export const Navbar = () => {
  //const title = "groupomania";
  return (
    <div className="header">
      <div className="header-content">
      <NavLink exact to="/">
        <img className="logo" src={logo} alt="groupomania" />
      </NavLink>
      <NavLink exact to="/profil">
        <FontAwesomeIcon className="profil-icon" icon="user" />
      </NavLink>
      
        <div className="navbar">
          <div className="navbar-container">
              <NavLink exact to="/">
                <div className="navbar-element">
                  <p><FontAwesomeIcon icon="home-lg" />home</p>
                </div>
              </NavLink>
              <NavLink exact to="/">
                <div className="navbar-element">
                  <p><FontAwesomeIcon icon="circle-plus" />Create post</p>
                </div>
              </NavLink>
              <NavLink exact to="/">
                <div className="navbar-element">
                <p><FontAwesomeIcon icon="comment-dots" />Comments</p>
                </div>
              </NavLink>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
