import React from "react";

import { SpanDot, CardIcon } from "../../../../../../common";
import PriceLevel from "./components/PriceLevel";

import {
  Card,
  Label,
  LabelText,
  CardContent,
  TextBlock,
  TextBlockItem,
  Text,
  IconsBlock,
  IconsBlockItem,
  Span,
} from "./RestaurantCardElements";

export const RestaurantCard = ({ card }) => {
  const { 
    name, 
    formatted_address, 
    photos, 
    cuisine, 
    dietaryRestrictions, 
    delivery,
    pickup, 
    rating, 
    opening_hours, 
    price_level,
    user_ratings_total 
  } = card;
  const imageUrl = photos[0].links[0];

  return (
    <Card imageUrl={imageUrl}>
      { !delivery && !pickup && (
        <Label>
          <CardIcon src="./assets/icons/dine-in.svg" alt="Thunderbolt icon" />
          <LabelText>Dine-in only</LabelText>
        </Label>
      )}
      <CardContent delivery={delivery} pickup={pickup}>
        <TextBlock>
          <TextBlockItem>{name}</TextBlockItem>
          <TextBlockItem>
            <Text>{cuisine}</Text>
            <SpanDot src="./assets/icons/ellipse.svg" alt="Middle dot icon" />
            <Text>{dietaryRestrictions}</Text>
          </TextBlockItem>
          <TextBlockItem>
            <Text>{formatted_address}</Text>
          </TextBlockItem>
        </TextBlock>
        <IconsBlock>
          <IconsBlockItem>
            <CardIcon src="./assets/icons/star-red.svg" alt="Red star icon" />
            <Text><Span>{rating}</Span> ({user_ratings_total})</Text>
          </IconsBlockItem>
          <IconsBlockItem>
            <CardIcon src="./assets/icons/clock.svg" alt="Red clock icon" />
            <Text><Span>{opening_hours.hours.open}-{opening_hours.hours.close}</Span></Text>
          </IconsBlockItem>
          <IconsBlockItem>
            <PriceLevel priceLevel={price_level} />
          </IconsBlockItem>
        </IconsBlock>
      </CardContent>
    </Card>
  );
};
