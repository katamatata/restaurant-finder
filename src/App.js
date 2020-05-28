import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Restaurant from "./pages/RrstaurantFrontPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            component={Restaurant}
          />
          <Route
            path="/:id"
            component={() => "todo: insert restaurant component"}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
