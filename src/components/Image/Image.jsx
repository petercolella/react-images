import React from "react";

const Image = ({ src, title }) => {
  return <img className="card-img-top" src={src} alt={title} />;
};

export default Image;
