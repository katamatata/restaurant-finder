import React from "react";
import { ListWrapper } from "./RestaurantListElements";
import RestaurantCard from "../RestaurantCard";

export const RestaurantList = () => {
  const RESTAURANTS_API =
    "https://redi-final-restaurants.herokuapp.com/restaurants";

  const [restaurantList, setRestaurantList] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(RESTAURANTS_API);
      const data = await response.json();
      setRestaurantList(data.results);
    }
    fetchData();
  }, []);

  return (
    <ListWrapper>
      {restaurantList.map((item) => (
        <RestaurantCard card={item} key={item.name} />
      ))}
    </ListWrapper>
  );
};
