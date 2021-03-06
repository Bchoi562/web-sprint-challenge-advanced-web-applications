import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <PrivateRoute path="/bubblePage" component={BubblePage}/>
        <Route exact path="/" component={Login} />
        
      </div>
    </Router>
  );
}

export default App;
