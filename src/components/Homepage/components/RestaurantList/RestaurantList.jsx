import React, { useEffect, useState } from "react";

import { ContentWrapper } from "../../../../common";

import { ListWrapper, Loading, StyledLink } from "./RestaurantListElements";
import RestaurantCard from "../RestaurantCard";

const RESTAURANTS_API =
  "https://redi-final-restaurants.herokuapp.com/restaurants";

export const RestaurantList = (props) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState(props.searchValue);
  const [selectedCategory, setSelectedCategory] = React.useState(
    props.selectedCategory
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(RESTAURANTS_API);
      const data = await response.json();
      setRestaurantList(data.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setSearchValue(props.searchValue);
  }, [props.searchValue]);

  useEffect(() => {
    setSelectedCategory(props.selectedCategory);
  }, [props.selectedCategory]);

  const filterRestaurantsSearchBar = (item) => {
    if (searchValue !== "") {
      return (
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.cuisine.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    return item;
  };

  const filterRestaurantsCategory = (item) => {
    if (selectedCategory !== null) {
      return item.cuisine.toLowerCase() === selectedCategory.toLowerCase();
    }
    return item;
  };

  return loading ? (
    <Loading src="./loading.svg" alt="Loading" />
  ) : (
    <ContentWrapper>
      <ListWrapper>
        {restaurantList
          .filter(filterRestaurantsCategory)
          .filter(filterRestaurantsSearchBar)
          .map((item) => (
            <StyledLink
              to={{ pathname: `/${item.id}`, state: { restaurant: item } }}
              key={item.id}
            >
              <RestaurantCard card={item} key={item.id} />
            </StyledLink>
          ))}
      </ListWrapper>
    </ContentWrapper>
  );
};
