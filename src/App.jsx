import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Homepage from "./components/Homepage";
import RestaurantPage from "./components/RestaurantPage";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/:id">
        <RestaurantPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
