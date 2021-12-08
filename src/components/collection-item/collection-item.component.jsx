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
    <div classname="collection-footer">
      <span classname="name">{name}</span>
      <span classname="price">{price}</span>
    </div>
  </div>;
};

export default CollectionItem;
