import React from "react";

import SearchBar from "../SearchBar";

import { Wrapper, H1, Image, Inner } from "./HomepageImageElements";

export const HomepageImage = (props) => {
  return (
    <Wrapper>
      <Image src="./choosing-food.png" alt="Woman is choosing food" />
      <Inner>
        <H1>Your favourite food from the neighbourhood</H1>
        <SearchBar setSearchValue={props.setSearchValue} />
      </Inner>
    </Wrapper>
  );
};
