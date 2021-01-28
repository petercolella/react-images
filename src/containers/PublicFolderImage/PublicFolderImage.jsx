import React from "react";
import Card from "../../components/Card/Card";
import cards from "./cards.json";

const PublicFolderImage = () => {
  return (
    <div>
      <h1>Images from Public Folder</h1>
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </div>
  );
};

export default PublicFolderImage;
