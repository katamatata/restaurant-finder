import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RestaurantsListingPage from "./pages/RestaurantFrontPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            component={RestaurantsListingPage}
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
