import React from "react";
import Image from "../Image/Image";

const Card = (props) => {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <Image {...props} />
        <div className="card-body">
          <p className="card-text">{`${props.alt
            .substring(0, 1)
            .toUpperCase()}${props.alt.substring(1)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
