import React from "react";

import { ContentWrapper } from "../../common";

import { HeaderWrapper, Logo } from "./HeaderElements";

export const Header = () => (
  <HeaderWrapper>
    <ContentWrapper>
      <Logo src="./logo.png" alt="Logo" />
    </ContentWrapper>
  </HeaderWrapper>
);
