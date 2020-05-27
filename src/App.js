import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Switch>
          <Route
            path="/"
            exact
            component={"todo: insert component with list of restaurants"}
          />
          <Route
            path="/restaurants/:id"
            component={"todo: insert restaurant component"}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
