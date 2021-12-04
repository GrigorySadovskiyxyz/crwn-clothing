import React from "react";

import "./collection-item.syles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  <div classname="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url${imageUrl}`,
      }}
    ></div>
    <div></div>
  </div>;
};
