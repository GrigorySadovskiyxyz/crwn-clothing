import React from "react";

import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        classname="background-image"
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

export default withRouter(MenuItem);
