import React, { useContext } from "react";
import "../css/styles.css";
import {Navbar} from "../components/Navbar"
import {Thread} from "../components/Comment/Thread";
import { UidContext } from "../components/AppContext";
import {Connexion} from "../components/Log/Connexion";
import NewComment from "../components/Comment/NewComment";


function Home() {
  const uid = useContext(UidContext);

  return (
   <div>
   
    
    {uid ? ( 
      <div>
      <div className="alert-image">
      <p>API S3 en cours d'installation (les images ne sont pas opérationnelle)</p>
    </div>
    <div className="home"> 
      <Navbar />
      <div className="home-container">
      <NewComment/>
      <Thread />
      </div>
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
