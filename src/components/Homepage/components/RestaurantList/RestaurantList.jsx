import React from "react";

import { ContentWrapper, Loading } from "../../../../common";
import RestaurantCard from "./components/RestaurantCard";

import { ListWrapper, StyledLink } from "./RestaurantListElements";

export const RestaurantList = ({
  loading,
  restaurants,
  searchValue, 
  selectedCategory, 
  selectedServiceType, 
  selectedDietary 
}) => {

  // state for filtered restaurants?
  // effects for each filter?

  const filterBySearch = (item) => {
    if (searchValue !== "") {
      return (
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.cuisine.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.dietaryRestrictions.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    return true;
  };

  const filterByCategory = (item) => {
    if (selectedCategory !== "all") {
      return item.cuisine.toLowerCase() === selectedCategory.toLowerCase();
    }
    return true;
  };

  const filterByServiceType = (item) => {
    if (selectedServiceType === "Delivery") {
      return item.delivery;
    } else if (selectedServiceType === "Pickup") {
      return item.pickup;
    } else if (selectedServiceType === "Dine-in") {
      return !item.delivery && !item.pickup;
    } 
    return true;
  }

  const filterByDietary = (item) => {
    if (selectedDietary !== "") {
      return item.dietaryRestrictions.toLowerCase() === selectedDietary.toLowerCase();
    }
    return true;
  }

  const filteredRestaurants = restaurants
    .filter(filterBySearch)
    .filter(filterByCategory)
    .filter(filterByServiceType)
    .filter(filterByDietary)


  return loading ? (
    <Loading src="./assets/spinner.gif" alt="Loading in progress" />
  ) : (
    <ContentWrapper>
      <ListWrapper>
        {filteredRestaurants
          .map((item) => (
            <StyledLink
              to={{ pathname: `/${item.id}`, state: { restaurant: item } }}
              key={item.id}
            >
              <RestaurantCard card={item} key={item.id} />
            </StyledLink>
        ))}
      </ListWrapper>
      {filteredRestaurants.length === 0 && !loading && (
        <div>No results match your search criteria.</div>
      )}
    </ContentWrapper>
  );
};
