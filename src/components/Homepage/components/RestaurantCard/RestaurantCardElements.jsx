import styled from "styled-components";

export const RestaurantCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 12rem;
  height: 10rem;
  margin-right: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem 1rem;
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
