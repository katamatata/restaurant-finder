import styled from "styled-components";

export const SearchBarInput = styled.input`
  height: 3rem;
  width: 100%;
  display: block;
  font-size: 1.2rem;
  border: none;
  padding-left: 1rem;
  border-radius: 3px;
  &::placeholder {
    font-style: italic;
    opacity: 0.5;
  }
`;
