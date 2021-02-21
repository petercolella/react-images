import React from "react";
import Card from "../../components/Card/Card";
import CodeGists from "./CodeGists";
import laptop from "./images/laptop.jpg";
import ocean from "./images/ocean.jpg";
import plane from "./images/plane.jpg";

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
        <div className="col">
          <h1 className="text-center">Images within Src Folder</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          {cards.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
        <div className="col-8">
          <CodeGists />
        </div>
      </div>
    </>
  );
};

export default SrcFolderImage;
