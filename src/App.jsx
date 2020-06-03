import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route
        path="/:id"
        component={() => "todo: insert restaurant component"}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
