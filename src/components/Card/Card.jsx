import React from "react";
import Image from "../Image/Image";

const Card = (props) => {
  return (
    <div className="p-3">
      <div className="card" style={{ width: "18rem" }}>
        <Image {...props} />
        <div className="card-body">
          <p className="card-text">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
