import React from "react";
import { ContentWrapper, Title } from "../../../../common";
import SearchBar from "../SearchBar";

import { Wrapper, Image, Inner, TextContent, Text, InputContent, ImageContent, StyledLink, ImageCredit } from "./HomepageImageElements";

export const HomepageImage = (props) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Inner>
          <TextContent>
            <Title>Discover your favorite food in the neighborhood</Title>
            <Text>
              BerlinEats helps Berliners discover restaurants in need, skipping expensive delivery platforms and connecting them to great food.
            </Text>
            <InputContent>
              <SearchBar setSearchValue={props.setSearchValue} />
            </InputContent>
          </TextContent>
          <ImageContent>
            <Image src="./choosing-food.png" alt="Woman is choosing food" />
            <ImageCredit>
              Art by <StyledLink href="https://www.freepik.com/pikisuperstar" target="_blank">pikisuperstar</StyledLink>
            </ImageCredit>
          </ImageContent>
        </Inner>
      </ContentWrapper>
    </Wrapper>
  );
};
