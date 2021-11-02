import React, { useEffect, useState } from "react";
import { useLocation, Redirect } from "react-router-dom";

import { ContentWrapper } from "../../common";

import Info from "./components/Info";
import TopImage from "./components/TopImage";
import Images from "./components/Images";

import { NavigationLink } from "./RestaurantPageElements";

export const RestaurantPage = () => {
  const { state } = useLocation();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [restaurant, setrestaurant] = useState(null);

  useEffect(() => {
    if (state?.restaurant) {
      setrestaurant(state.restaurant);
      setError(null);
    } else {
      setError(true);
    }
    setLoading(false);
  }, []);

  if (error) {
    return <Redirect to="/" />;
  }

  return loading ? (
    <img src="./assets/icons/loading.svg" alt="Loading" />
  ) : (
    <>
      <TopImage>
        <ContentWrapper>
          <Info info={restaurant} />
        </ContentWrapper>
      </TopImage>
      <ContentWrapper>
        <NavigationLink to={"/"}>All restaurants</NavigationLink>
      </ContentWrapper>
      <ContentWrapper>
        <Images urls={restaurant.photos[0].links} />
      </ContentWrapper>
    </>
  );
};
