import React from "react";

import { ContentWrapper } from "../../common";

import { CategoriesWrapper, Category } from "./CategoriesListElements";

export const CategoriesList = () => (
  <ContentWrapper>
    <CategoriesWrapper>
      <Category active>All</Category>
      <Category>Italian</Category>
      <Category>Mexican</Category>
      <Category>Indian</Category>
      <Category>Vegeterian</Category>
      <Category>Japanese</Category>
    </CategoriesWrapper>
  </ContentWrapper>
);
