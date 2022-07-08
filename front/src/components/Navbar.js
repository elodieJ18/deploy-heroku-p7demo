import React from "react";
import "../styles/style.css";
import logo from "../assets/logo-groupomania.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faHomeLg, faComments, faUserPen, faCommentDots } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faHomeLg, faComments, faCommentDots,faUserPen);


export const Navbar = () => {
  //const title = "groupomania";
  return (
    <div className="header">
      <div className="header-content">
      <img className="logo" src={logo} alt="groupomania" />
        <div className="navbar">
        <div className="navbar-container">
            <div className="navbar-element"><p><FontAwesomeIcon icon="home-lg" />home</p></div>
            <div className="navbar-element"><p><FontAwesomeIcon icon="user-pen" />profil</p></div>
            <div className="navbar-element"><p><FontAwesomeIcon icon="comments" />message</p></div>
            <div className="navbar-element"><p><FontAwesomeIcon icon="comment-dots" />Comments</p></div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
