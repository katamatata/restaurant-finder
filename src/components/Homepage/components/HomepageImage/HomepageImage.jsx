import React from "react";

import { Wrapper, H1 } from "./HomepageImageElements";
import SearchBar from "../SearchBar";

export const HomepageImage = (props) => {
  return (
    <Wrapper>
      <H1>Your favourite food from the neighbourhood</H1>
      <SearchBar setSearchValue={props.setSearchValue} />
    </Wrapper>
  );
};
