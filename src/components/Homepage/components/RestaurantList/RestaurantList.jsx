import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ContentWrapper } from "../../../../common";

import { ListWrapper, Loading } from "./RestaurantListElements";
import RestaurantCard from "../RestaurantCard";

const RESTAURANTS_API =
  "https://redi-final-restaurants.herokuapp.com/restaurants";

export const RestaurantList = (props) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState(props.searchValue);

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
    <Loading src="./loading.svg" alt="Loading" />
  ) : (
    <ContentWrapper>
      <ListWrapper>
        {restaurantList.filter(filterRestaurantsSearchBar).map((item) => (
          <Link
            to={{ pathname: `/${item.id}`, state: { restaraunt: item } }}
            key={item.id}
          >
            <RestaurantCard card={item} key={item.id} />
          </Link>
        ))}
      </ListWrapper>
    </ContentWrapper>
  );
};
