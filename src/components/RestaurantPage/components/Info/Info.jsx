import React from "react";

import { InfoWrapper } from "./InfoElements";

export const Info = ({ info }) => {
  const { name, rating, cuisine } = info;

  return (
    <InfoWrapper>
      {name}
      {rating}
      {cuisine}
    </InfoWrapper>
  );
};
