import React from "react";
import Card from "../../components/Card/Card";
import laptop from "../../images/laptop.jpg";
import ocean from "../../images/ocean.jpg";
import plane from "../../images/plane.jpg";

const cards = [
  {
    src: laptop,
    title: "Laptop",
  },
  {
    src: ocean,
    title: "Ocean",
  },
  {
    src: plane,
    title: "Plane",
  },
];

const SrcFolderImage = () => {
  return (
    <>
      <div className="row my-5">
        <div className="col-4">
          {cards.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
        <div className="col-8">
          <h1 className="text-center">Images from Src Folder</h1>
        </div>
      </div>
    </>
  );
};

export default SrcFolderImage;
