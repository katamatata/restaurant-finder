import React from "react";

import HomepageImage from "./components/HomepageImage";
import CategoriesList from "./components/CategoriesList";
import RestaurantList from "./components/RestaurantList";

export const Homepage = () => {
  return (
    <div>
      <HomepageImage />
      <CategoriesList />
      <RestaurantList />
    </div>
  );
};
