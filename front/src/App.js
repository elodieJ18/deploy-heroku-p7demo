import "./App.css";
import React, {useState, useEffect} from "react";
import Route from './components/Route';
import { UidContext } from "./components/AppContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.action";

 
const App = () => {
    const [uid, setUid] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchToken = async () => {
        await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}jwtid`,
          withCredentials: true,
      }).then((res) => {
        setUid(res.data);
      })
      .catch((err) => console.log("No token"));
    };
      fetchToken();
      if (uid) dispatch(getUser(uid))
    },  [uid, dispatch]);
 
 
  return (
    <UidContext.Provider value={uid}> 
      <Route/>
    </UidContext.Provider> 
  );
}

export default App;
