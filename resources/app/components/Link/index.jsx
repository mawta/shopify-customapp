import React from "react";
import { Link as ReactLink } from "react-router-dom";

const Link = ({ children, url, ...rest }) => {
  if (typeof url === "undefined") {
    url = "";
  }
  return (
    <ReactLink to={url} {...rest}>
      {children}
    </ReactLink>
  );
};

export default Link;
