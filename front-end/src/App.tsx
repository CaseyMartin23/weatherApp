import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Weather from "./pages/weather";
import Help from "./pages/help";
import AppBar from "./components/appbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Switch>
          <Route exact path="/">
            <Weather />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
