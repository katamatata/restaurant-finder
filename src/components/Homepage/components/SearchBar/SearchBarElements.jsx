import styled from "styled-components";

export const SearchInput = styled.input`
  height: 48px;
  width: 100%;
  font-size: 15px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 8px;
  padding-left: 16px;
  border-radius: 4px;
  &::placeholder {
    opacity: 0.5;
  }
`;
