import React from "react";
import Image from "../Image/Image";

const Card = (props) => {
  return (
    <div>
      <Image {...props} />
    </div>
  );
};

export default Card;
