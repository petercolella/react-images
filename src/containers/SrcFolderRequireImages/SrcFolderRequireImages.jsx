import React from "react";
import Card from "../../components/Card/Card";
import cards from "./cardsRequire";

const PublicFolderImage = () => {
  return (
    <div>
      <h1>Images from Src Folder Using Require</h1>
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </div>
  );
};

export default PublicFolderImage;
