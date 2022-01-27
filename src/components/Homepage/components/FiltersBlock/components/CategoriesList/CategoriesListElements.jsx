import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 73%;
  margin-right: 30px;
`;

export const Category = styled.div`
  font-size: 14px;
  padding: 7px 12px;
  text-align: center;
  text-transform: capitalize;
  background-color: none;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ active }) => (active ? "#fff" : "#272844")};
  background-color: ${({ active }) => (active ? "#ea5a42" : "none")};
  transition: All 0.5s ease;
  &:hover {
    background-color: ${({ active }) => (!active ? "#f5f5f5" : "#df7461")};
  }
`;
