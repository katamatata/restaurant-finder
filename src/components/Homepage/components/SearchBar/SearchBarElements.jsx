import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchBarInput = styled.input`
  height: 2.5rem;
  width: 40rem;
  font-size: 1.5rem;
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding-left: 1rem;
  border-radius: 3px;
  &::placeholder {
    font-style: italic;
  }
`;
