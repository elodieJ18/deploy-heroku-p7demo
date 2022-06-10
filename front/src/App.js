import { Component } from "react";
import "./App.css";
import AppRouter from "./components/Routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
