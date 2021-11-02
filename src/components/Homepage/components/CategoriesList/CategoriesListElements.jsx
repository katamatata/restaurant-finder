import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
`;

export const Category = styled.div`
  font-size: 15px;
  padding: 9px 18px;
  margin: 0 16px;
  text-align: center;
  background-color: none;
  border-radius: 16px;
  cursor: pointer;
  color: ${({ active }) => (active ? "#fff" : "#272844")};
  background-color: ${({ active }) => (active ? "#ea5a42" : "none")};
  transition: All 0.5s ease;
  &:hover {
    background-color: ${({ active }) => (!active ? "#f5f5f5;" : "#df7461")};
  }
`;

export const Loading = styled.img`
  display: block;
  margin: 30px auto;
`;
