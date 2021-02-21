import React from "react";
import Card from "../../components/Card/Card";
import CodeGists from "./CodeGists";
import cards from "./cards.json";

const PublicFolderImage = () => {
  return (
    <>
      <div className="row my-5">
        <div className="col">
          <h1 className="text-center">Images in Public Folder</h1>
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

export default PublicFolderImage;
