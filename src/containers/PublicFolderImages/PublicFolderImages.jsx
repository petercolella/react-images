import React from "react";
import Card from "../../components/Card/Card";
import cards from "./cards.json";

const PublicFolderImage = () => {
  return (
    <>
      <div className="row my-5">
        <div className="col-4">
          {cards.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
        <div className="col-8">
          <h1 className="text-center">Images from Public Folder</h1>
        </div>
      </div>
    </>
  );
};

export default PublicFolderImage;
