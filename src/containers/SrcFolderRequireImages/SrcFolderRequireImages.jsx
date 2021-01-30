import React from "react";
import Card from "../../components/Card/Card";
import cards from "./cardsRequire";

const PublicFolderImage = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Images from Src Folder Using Require</h1>
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

export default PublicFolderImage;
