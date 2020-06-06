import React from "react";

import { ImageWrapper, H1 } from "./HomepageImageElements";
import SearchBar from "../SearchBar";

export const HomepageImage = (props) => {
  return (
    <ImageWrapper>
      <H1>Your favourite food from the neighbourhood</H1>
      <SearchBar handleSearchValue={props.handleSearchValue} />
    </ImageWrapper>
  );
};
