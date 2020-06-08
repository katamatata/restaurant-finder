import React, { useEffect, useState } from "react";
import { Link, useLocation, Redirect } from "react-router-dom";

import { ContentWrapper } from "../../common";

import Info from "./components/Info";
import TopImage from "./components/TopImage";
import Images from "./components/Images";

export const RestaurantPage = () => {
  const { state } = useLocation();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [restaraunt, setRestaraunt] = useState(null);

  useEffect(() => {
    if (state?.restaraunt) {
      setRestaraunt(state.restaraunt);
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
    <img src="./loading.svg" alt="Loading" />
  ) : (
    <>
      <ContentWrapper>
        <Link to={"/"}>All restaurants</Link>
      </ContentWrapper>
      <TopImage>
        <Info info={restaraunt} />
      </TopImage>
      <Images urls={restaraunt.photos[0].links} />
    </>
  );
};
