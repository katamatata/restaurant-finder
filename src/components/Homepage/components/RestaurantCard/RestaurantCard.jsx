import React from "react";

import {
  Restaurant,
  Name,
  Address,
  AddressBlock,
  Inner,
} from "./RestaurantCardElements";

export const RestaurantCard = ({ card }) => {
  const { name, formatted_address, photos } = card;
  const imageUrl = photos[0].links[0];

  return (
    <Restaurant imageUrl={imageUrl}>
      <Inner>
        <Name>{name}</Name>
        <AddressBlock>
          <Address>{formatted_address}</Address>
        </AddressBlock>
      </Inner>
    </Restaurant>
  );
};
