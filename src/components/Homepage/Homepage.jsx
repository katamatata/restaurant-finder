import React from "react";

import HomepageImage from "./components/HomepageImage";
import CategoriesList from "./components/CategoriesList";
import RestaurantList from "./components/RestaurantList";

export const Homepage = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const handleSearchValue = (input) => {
    setSearchValue(input);
  };
  return (
    <div>
      <HomepageImage handleSearchValue={handleSearchValue} />
      <CategoriesList />
      <RestaurantList searchValue={searchValue} />
    </div>
  );
};
