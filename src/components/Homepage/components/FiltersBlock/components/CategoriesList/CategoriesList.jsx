import React from "react";

import { CategoriesWrapper, Category } from "./CategoriesListElements";

export const CategoriesList = ({ categories, selectedCategory, setSelectedCategory }) => {

  const handleSelectedCategory = (item) => {
    setSelectedCategory(item);
  };

  return (
    <CategoriesWrapper>
      {categories.map((category) => (
        <Category
          key={category}
          onClick={() => handleSelectedCategory(category)}
          active={
            category === selectedCategory ||
            (category === "all" && selectedCategory === null)
          }
        >
          {category}
        </Category>
      ))}
    </CategoriesWrapper>
  );
};
