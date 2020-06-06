import React from "react";
import { Link } from "react-router-dom";

import {
  RestaurantCardWrapper,
  RestaurantName,
} from "./RestaurantCardElements";

export const RestaurantCard = ({ card }) => {
  const { id, name, icon } = card;

  return (
    <Link to={`/${id}`}>
      <RestaurantCardWrapper>
        <div>
          <img src={icon} alt={name} />
        </div>
        <RestaurantName>{name}</RestaurantName>
      </RestaurantCardWrapper>
    </Link>
  );
};
