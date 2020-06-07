import React from "react";

import HomepageImage from "./components/HomepageImage";
import CategoriesList from "./components/CategoriesList";
import RestaurantList from "./components/RestaurantList";

export const Homepage = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div>
      <HomepageImage setSearchValue={setSearchValue} />
      <CategoriesList />
      <RestaurantList searchValue={searchValue} />
    </div>
  );
};
