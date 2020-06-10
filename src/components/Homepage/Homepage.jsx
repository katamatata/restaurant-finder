import React from "react";

import HomepageImage from "./components/HomepageImage";
import CategoriesList from "./components/CategoriesList";
import RestaurantList from "./components/RestaurantList";

export const Homepage = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  return (
    <div>
      <HomepageImage setSearchValue={setSearchValue} />
      <CategoriesList setSelectedCategory={setSelectedCategory} />
      <RestaurantList
        selectedCategory={selectedCategory}
        searchValue={searchValue}
      />
    </div>
  );
};
