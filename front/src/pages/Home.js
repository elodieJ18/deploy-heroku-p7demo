import React, { useContext } from "react";
import "../css/styles.css";
import {Navbar} from "../components/Navbar"
import profil from "../assets/user-200.png";
import { UidContext } from "../components/AppContext";
import {Connexion} from "../components/Log/Connexion";


function Home() {
  const uid = useContext(UidContext);

  return (
   <div>
   
    
    {uid ? (  <div className="home-container"> 
      <Navbar />
      <div className="home-actuality">
        <div className="home-card-post">
          <div className="home-card-userProfil">
            <img src={profil} />
            <div className="home-card-userStatus">
              <p className="home-card-description-name">Name</p>
              <p className="home-card-description-status">Status</p>
              <p>Date</p>
            </div>
          </div>
          <div className="home-card-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="home-card-reaction">
              
          </div>
        </div>
        <div></div>
        </div>
        </div>) : (
      <div>
          <Connexion/>
      </div>
        )}
    </div>
 
  );
}

export default Home;
