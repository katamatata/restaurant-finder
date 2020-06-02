import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import HomepageImage from "./components/HomepageImage";
import CategoriesList from "./components/CategoriesList";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact>
        <HomepageImage />
        <CategoriesList />
      </Route>
      <Route
        path="/:id"
        component={() => "todo: insert restaurant component"}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
