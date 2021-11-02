import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../Header";
import Homepage from "../Homepage";
import RestaurantPage from "../RestaurantPage";
import Footer from "../Footer";

import { Body } from './AppElements';

export const App = () => (
 <Body>
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
    <Footer />
  </BrowserRouter>
 </Body>
);
