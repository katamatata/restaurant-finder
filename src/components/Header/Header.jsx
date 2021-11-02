import React from "react";
import { Link } from "react-router-dom";

import { ContentWrapper } from "../../common";
import { HeaderWrapper, Logo } from "./HeaderElements";

export const Header = () => (
  <HeaderWrapper>
    <ContentWrapper>
      <Link to="/">
        <Logo src="./assets/icons/logo.png" alt="Logo" />
      </Link>
    </ContentWrapper>
  </HeaderWrapper>
);
