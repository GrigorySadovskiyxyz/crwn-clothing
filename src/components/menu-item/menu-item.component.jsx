import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          width: "100%",
          height: "100%",
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span classname="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;