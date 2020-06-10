import styled from "styled-components";

import { Link } from "react-router-dom";

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 16px;
`;

export const Loading = styled.img`
  display: block;
  margin: 30px auto;
`;

export const StyledLink = styled(Link)`
  color: black;
`;
