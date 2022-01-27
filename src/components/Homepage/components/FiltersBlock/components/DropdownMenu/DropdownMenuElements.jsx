import styled from "styled-components";

export const Dropdown = styled.div`
  font-size: 14px;
  position: relative;
  width: 20%;
  margin-right: 30px;
`;

export const DropdownBtn = styled.div`
  color: #ABADAD;
  background: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #E8EBEB;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  padding: 6px 0;
  width: 100%;
  color: #7E7E7E;
  background: #FFF;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

export const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #F5F5F5;
  }
  // color: ${({ selected }) => (selected ? "#FFF" : "#F15743")};
  // background-color: ${({ selected }) => (selected ? "#F15743" : "#FFF")};
`;