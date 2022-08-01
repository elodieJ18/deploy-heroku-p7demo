import React, { useContext } from "react";
import "../css/styles.css";
import {Navbar} from "../components/Navbar"
import {Thread} from "../components/Comment/Thread";
import { UidContext } from "../components/AppContext";
import {Connexion} from "../components/Log/Connexion";


function Home() {
  const uid = useContext(UidContext);

  return (
   <div>
   
    
    {uid ? (  <div className="home-container"> 
      <Navbar />
      <Thread />
      </div>) : (
      <div>
          <Connexion/>
      </div>
        )}
    </div>
 
  );
}

export default Home;
