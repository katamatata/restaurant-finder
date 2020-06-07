import React from "react";
import {
  RestaurantCardWrapper,
  RestaurantName,
  RestaurantAddress,
  AddressImage,
  AddressBlock,
} from "./RestaurantCardElements";

export const RestaurantCard = (props) => {
  return (
    <RestaurantCardWrapper>
      <div>
        <img src={props.card.icon} alt={props.card.name} />
      </div>
      <RestaurantName>{props.card.name}</RestaurantName>
      <AddressBlock>
        <AddressImage src="./address.png" alt="Address" />
        <RestaurantAddress>{props.card.formatted_address}</RestaurantAddress>
      </AddressBlock>
    </RestaurantCardWrapper>
  );
};
