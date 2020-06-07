import React, { useEffect, useState } from "react";

import { ContentWrapper } from "../../../../common/ContentWrapper";

import { ListWrapper, Loading } from "./RestaurantListElements";
import RestaurantCard from "../RestaurantCard";
import { Link } from "react-router-dom";

const RESTAURANTS_API =
  "https://redi-final-restaurants.herokuapp.com/restaurants";

export const RestaurantList = (props) => {
  const [restaurantList, setRestaurantList] = React.useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = React.useState(props.searchValue);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(RESTAURANTS_API);
      const data = await response.json();
      setRestaurantList(data.results);
    };

    fetchData();
    setLoading(false);
  }, []);

  React.useEffect(() => {
    setSearchValue(props.searchValue);
  }, [props.searchValue]);

  const filterRestaurantsSearchBar = (item) => {
    if (searchValue !== "") {
      return (
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.cuisine.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    return item;
  };

  return loading ? (
    <Loading src="./loading.svg" />
  ) : (
    <ContentWrapper>
      <ListWrapper>
        {restaurantList.filter(filterRestaurantsSearchBar).map((item) => (
          <Link to={`/${item.id}`} key={item.id}>
            <RestaurantCard card={item} key={item.id} />
          </Link>
        ))}
      </ListWrapper>
    </ContentWrapper>
  );
};
