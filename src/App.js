import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import HomepageImage from './components/HomepageImage';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact>
        <HomepageImage />
      </Route>
      <Route path="/:id"
        component={() => "todo: insert restaurant component"}
      />
    </Switch>
  </BrowserRouter>
);

export default App;