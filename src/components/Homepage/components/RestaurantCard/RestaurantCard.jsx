import React from "react";

import {
  RestaurantCardWrapper,
  RestaurantName,
  RestaurantAddress,
  AddressImage,
  AddressBlock,
} from "./RestaurantCardElements";

export const RestaurantCard = ({ card }) => {
  const { name, icon, formatted_address } = card;

  return (
    <RestaurantCardWrapper>
      <div>
        <img src={icon} alt={name} />
      </div>
      <RestaurantName>{name}</RestaurantName>
      <AddressBlock>
        <AddressImage src="./address.png" alt="Address" />
        <RestaurantAddress>{formatted_address}</RestaurantAddress>
      </AddressBlock>
    </RestaurantCardWrapper>
  );
};
