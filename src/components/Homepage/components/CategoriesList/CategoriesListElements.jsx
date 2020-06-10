import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

export const Category = styled.div`
  padding: 9px 18px;
  text-align: center;
  background-color: none;
  border-radius: 22px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "orange" : "none")};
  &:hover {
    background-color: ${({ active }) => (!active ? "#f5f5f5;" : "none")};
  }
`;

export const Loading = styled.img`
  display: block;
  margin: 30px auto;
`;
