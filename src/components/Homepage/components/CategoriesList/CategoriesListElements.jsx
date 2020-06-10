import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
`;

export const Category = styled.div`
  padding: 9px 18px;
  margin: 0 16px;
  text-align: center;
  background-color: none;
  border-radius: 16px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "orange" : "none")};
  transition: All 0.5s ease;
  &:hover {
    background-color: #f5f5f5;
  }
`;
