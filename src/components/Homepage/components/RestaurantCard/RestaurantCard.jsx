import React from "react";
import {
  RestaurantCardWrapper,
  RestaurantName,
} from "./RestaurantCardElements";

export const RestaurantCard = (props) => {
  return (
    <RestaurantCardWrapper>
      <div>
        <img src={props.card.icon} alt={props.card.name} />
      </div>
      <RestaurantName>{props.card.name}</RestaurantName>
    </RestaurantCardWrapper>
  );
};
