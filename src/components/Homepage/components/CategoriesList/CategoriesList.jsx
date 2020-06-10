import React from "react";

import { ContentWrapper } from "../../../../common";

import { CategoriesWrapper, Category } from "./CategoriesListElements";

export const CategoriesList = (props) => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const categories = [
    "All",
    "Italian",
    "Chinese",
    "Thai",
    "Mexican",
    "Indian",
    "Turkish",
  ];

  const handleSelectedCategory = (item) => {
    let category = null;
    if (item !== "All") {
      category = item;
    }
    setSelectedCategory(category);
    props.setSelectedCategory(category);
  };

  return (
    <ContentWrapper>
      <CategoriesWrapper>
        {categories.map((item) => (
          <Category
            key={item}
            onClick={() => handleSelectedCategory(item)}
            active={
              item === selectedCategory ||
              (item === "All" && selectedCategory === null)
            }
          >
            {item}
          </Category>
        ))}
      </CategoriesWrapper>
    </ContentWrapper>
  );
};
