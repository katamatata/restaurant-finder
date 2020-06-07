import React from "react";
import { ListWrapper } from "./RestaurantListElements";
import RestaurantCard from "../RestaurantCard";
import { Link } from "react-router-dom";

export const RestaurantList = (props) => {
  const RESTAURANTS_API =
    "https://redi-final-restaurants.herokuapp.com/restaurants";

  const [restaurantList, setRestaurantList] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState(props.searchValue);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(RESTAURANTS_API);
      const data = await response.json();
      setRestaurantList(data.results);
    }
    fetchData();
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

  return (
    <ListWrapper>
      {restaurantList.filter(filterRestaurantsSearchBar).map((item) => (
        <Link to={`/${item.id}`} key={item.id}>
          <RestaurantCard card={item} key={item.id} />
        </Link>
      ))}
    </ListWrapper>
  );
};
