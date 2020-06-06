import React, { useEffect, useState } from "react";

import { ListWrapper, Loading } from "./RestaurantListElements";
import RestaurantCard from "../RestaurantCard";

const RESTAURANTS_API =
  "https://redi-final-restaurants.herokuapp.com/restaurants";

export const RestaurantList = () => {
  const [loading, setLoading] = useState(true);
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(RESTAURANTS_API);
      const data = await response.json();
      setRestaurantList(data.results);
    };

    fetchData();
    setLoading(false);
  }, []);

  return loading ? (
    <Loading src="./loading.svg" />
  ) : (
    <ListWrapper>
      {restaurantList.map((item) => (
        <RestaurantCard card={item} key={item.name} />
      ))}
    </ListWrapper>
  );
};
