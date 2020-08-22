import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Guide from "../pages/guide";
import "../App.css";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/guide">
          <Guide />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
