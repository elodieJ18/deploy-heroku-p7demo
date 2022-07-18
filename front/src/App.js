import "./App.css";
import React, { useEffect, useState } from "react";
import Route from './components/Route';
import { UidContext } from "./components/AppContext";
import axios from "axios";

const App = () => {
    const [uid, setUid] = useState(null);

    useEffect(() => {
      const fetchToken = async () => {
        await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}jwtid`,
          withCredentials: true,
      })  .then((res) => {
        setUid(res.data)
        console.log(res.data)
        console.log("console.log (res.data)")
        console.log(res)
        console.log("console.log (res)")
      })
      .catch((err) => console.log("No token"));
    };
      fetchToken();
    }, [uid]);
    
    console.log(uid)
 
  return (
    <UidContext.Provider value={uid}> 
      <Route/>
    </UidContext.Provider> 
  );
}

export default App;
