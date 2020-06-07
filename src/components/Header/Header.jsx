import React from "react";

import { ContentWrapper } from "../../common";
import { HeaderWrapper, Logo } from "./HeaderElements";
import { Link } from "react-router-dom";

export const Header = () => (
  <HeaderWrapper>
    <ContentWrapper>
      <Link to="/">
        <Logo src="./logo.png" alt="Logo" />
      </Link>
    </ContentWrapper>
  </HeaderWrapper>
);
