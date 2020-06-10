import React from "react";
import { ContentWrapper } from "../../../../common";

import SearchBar from "../SearchBar";

import { Wrapper, H1, Image, Inner, Outer } from "./HomepageImageElements";

export const HomepageImage = (props) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Outer>
          <Image src="./choosing-food.png" alt="Woman is choosing food" />
          <Inner>
            <H1>Your favourite food from the neighbourhood</H1>
            <SearchBar setSearchValue={props.setSearchValue} />
          </Inner>
        </Outer>
      </ContentWrapper>
    </Wrapper>
  );
};
