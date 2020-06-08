import React from "react";

export const Images = ({ urls }) =>
  urls.length ? (
    <div>
      {urls.map((url) => (
        <img src={url} width="200px" key={url} />
      ))}
    </div>
  ) : null;
