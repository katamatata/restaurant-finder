import React from "react";
import { ListWrapper } from "./RestaurantListElements";
import { LIST_EXAMPLE } from "../../../../common/ListExample";

export const RestaurantList = () => {
  return (
    <ListWrapper>
      {LIST_EXAMPLE.map((item) => (
        <div key={item.name}>
          <img src={item.icon} alt={item.name} />
          <div> {item.name} </div>
        </div>
      ))}
    </ListWrapper>
  );
};
