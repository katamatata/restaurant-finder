import React from "react";

import { EuroIcon } from "../../../../../../../../common";

export const PriceLevel = ({ priceLevel }) => {

  if (!priceLevel) return null;

  const restaurantPriceLevelArr = [...new Array(priceLevel)];
  const maxPriceLevel = 4;
  const transparentPriceLevelIconsNumber = maxPriceLevel - priceLevel;

  const transparentPriceLevelIconsArr = transparentPriceLevelIconsNumber > 0 ? [...new Array(transparentPriceLevelIconsNumber)] : [];
  
  return (
    <>
      {restaurantPriceLevelArr.map((el, index) => 
        <EuroIcon key={index} src="./assets/icons/euro.svg" alt="Euro icon" />
      )}
      {transparentPriceLevelIconsArr.map((el, index) => 
        <EuroIcon key={index} src="./assets/icons/euro-transparent.svg" alt="Euro icon" />
      )}
    </>
  );
};