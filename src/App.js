//poonam
import React from 'react';
import './App.css';
import Restaurant from './Pages/RrstaurantFrontPage';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2  style={{ textAlign: "center" }}>Restaurant Finder </h2>

      <Restaurant/>

        <Switch>
          <Route
            path="/"
            exact
            component={() => "todo: insert component with list of restaurants"}
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
