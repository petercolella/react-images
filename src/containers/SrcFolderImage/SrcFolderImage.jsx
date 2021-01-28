import React from "react";
import Card from "../../components/Card/Card";
import laptop from "../../images/laptop.jpg";
import phil from "../../images/phil.jpg";
import plane from "../../images/plane.jpg";

const cards = [
  {
    src: laptop,
    alt: "laptop",
  },
  {
    src: phil,
    alt: "phil",
  },
  {
    src: plane,
    alt: "plane",
  },
];

const SrcFolderImage = () => {
  return (
    <div>
      <h1>Images from Src Folder</h1>
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </div>
  );
};

export default SrcFolderImage;
