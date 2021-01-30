import React from "react";
import Card from "../../components/Card/Card";
import laptop from "../../images/laptop.jpg";
import ocean from "../../images/ocean.jpg";
import plane from "../../images/plane.jpg";

const cards = [
  {
    src: laptop,
    alt: "laptop",
  },
  {
    src: ocean,
    alt: "ocean",
  },
  {
    src: plane,
    alt: "plane",
  },
];

const SrcFolderImage = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Images from Src Folder</h1>
        </div>
      </div>
      <div className="row">
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </>
  );
};

export default SrcFolderImage;
