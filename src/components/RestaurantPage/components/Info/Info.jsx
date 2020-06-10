import React from "react";

import {
  InfoWrapper,
  Name,
  Rating,
  InfoBlock,
  InfoBlockItem,
  SpanDot,
  AddressBlock,
} from "./InfoElements";

export const Info = ({ info }) => {
  const {
    name,
    rating,
    cuisine,
    price_level,
    dietaryRestrictions,
    formatted_address,
    opening_hours,
    user_ratings_total,
    delivery,
    pickup,
  } = info;

  return (
    <InfoWrapper>
      <Name>{name}</Name>
      <Rating>
        Star icon {rating} ({user_ratings_total} ratings)
      </Rating>
      <InfoBlock>
        <InfoBlockItem>
          {[...new Array(price_level)].map((_) => "$")}
        </InfoBlockItem>
        <SpanDot>&middot;</SpanDot>
        <InfoBlockItem>{cuisine}</InfoBlockItem>
        <SpanDot>&middot;</SpanDot>
        <InfoBlockItem>{dietaryRestrictions}</InfoBlockItem>
        <SpanDot>&middot;</SpanDot>
        <InfoBlockItem>
          Open from {opening_hours.hours.open} to {opening_hours.hours.close}
        </InfoBlockItem>
        {delivery && (
          <>
            <SpanDot>&middot;</SpanDot>
            <InfoBlockItem>delivery</InfoBlockItem>
          </>
        )}
        {pickup && (
          <>
            <SpanDot>&middot;</SpanDot>
            <InfoBlockItem>pickup</InfoBlockItem>
          </>
        )}
      </InfoBlock>
      <AddressBlock>{formatted_address}</AddressBlock>
    </InfoWrapper>
  );
};
