import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavigationLink = styled(Link)`
  color: black;
  display: inline-block;
  font-size: 14px;
  margin-bottom: 16px;
  &:hover {
    color: #F15743;
  }
`;
