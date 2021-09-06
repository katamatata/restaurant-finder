import React from "react";

import { Subtitle } from '../../../../common';
import {
  InfoWrapper,
  Rating,
  InfoBlock,
  InfoBlockItem,
  SpanDot,
  AddressBlock,
  Icon,
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
      <Subtitle>{name}</Subtitle>
      <Rating>
        <Icon src="/star.png" />
        {rating}({user_ratings_total} ratings)
      </Rating>
      <InfoBlock>
        <InfoBlockItem>
          {[...new Array(price_level)].map((_) => "€")}
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
