import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 6px;
  left: 12px;
`;

export const InputBase = styled.input`
  width: 100%;
  font-size: 12px;
  border: 1px solid #F15743;
  padding: 6px 14px 6px 35px;
  border-radius: 8px;
  &::placeholder {
    color: #ABADAD;
    opacity: 1;
  }
  &:focus{
    box-shadow: 0 0 2px #F15743;
  }
`;
