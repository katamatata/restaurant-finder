import React from "react";

import { ContentWrapper, Title } from "../../../../common";

import { 
  Wrapper, 
  Image, 
  Inner, 
  TextContent, 
  Text, 
  ImageContent, 
  StyledLink, 
  ImageCredit 
} from "./ImageBlockElements";

export const ImageBlock = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Inner>
          <TextContent>
            <Title>Discover your favorite food in the neighborhood</Title>
            <Text>
              BerlinEats helps Berliners discover restaurants in need, skipping expensive delivery platforms and connecting them to great food.
            </Text>
          </TextContent>
          <ImageContent>
            <Image src="./assets/images/choosing-food.png" alt="Woman is choosing food" />
            <ImageCredit>
              Art by <StyledLink href="https://www.freepik.com/pikisuperstar" target="_blank">pikisuperstar</StyledLink>
            </ImageCredit>
          </ImageContent>
        </Inner>
      </ContentWrapper>
    </Wrapper>
  );
};
