import styled from "styled-components";

export const RestaurantCardWrapper = styled.div`
  border: 1px solid black;
  width: 12rem;
  margin: 2rem 1rem;
  padding: 1rem;
  text-align: center;
  border: 1px solid black;
  border-radius: 22px;
  box-shadow: 2px 2px 8px #888888;
  background-color: SeaShell;
  color: #274b53;
  &:hover {
    background-color: Moccasin;
  }
`;

export const RestaurantName = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  padding: 1rem 1rem;
  img {
    display: block;
    margin: 0 auto 1rem;
  }
`;
export const RestaurantAddress = styled.div`
  font-size: 0.9rem;
  font-weight: normal;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const AddressImage = styled.img`
  width: 15%;
`;
export const AddressBlock = styled.div`
  display: flex;
  flex-direction: row;
`;
