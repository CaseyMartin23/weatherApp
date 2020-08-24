import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Info from "./pages/info";
import AppBar from "./components/appbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
