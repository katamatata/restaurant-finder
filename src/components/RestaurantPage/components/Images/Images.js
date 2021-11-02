import React from "react";

import { ImagesWrapper, Image } from "./ImagesElements";

export const Images = ({ urls }) =>
  urls.length ? (
    <ImagesWrapper>
      {urls.map((url) => (
        <Image src={url} key={url} alt="" />
      ))}
    </ImagesWrapper>
  ) : null;
