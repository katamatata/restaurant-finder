import React from "react";
import { Link } from "react-router-dom";

import { ContentWrapper } from "../../common";
import { HeaderWrapper, Logo, Inner } from "./HeaderElements";

export const Header = () => (
  <HeaderWrapper>
    <ContentWrapper>
      <Inner>
        <Link to="/">
          <Logo src="./assets/icons/logo.png" alt="BerlinEats logo" />
        </Link>
        <a href="https://github.com/katamatata/restaurant-finder">
          <img src="./assets/icons/github.svg" alt="Github logo"/>
        </a>
      </Inner>
    </ContentWrapper>
  </HeaderWrapper>
);
