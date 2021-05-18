import React from "react";
import Card from "../../components/Card/Card";
import CodeGists from "./CodeGists";
import cards from "./cards-require.json";

const SrcFolderJSONImages = () => {
  return (
    <>
      <div className="row my-5">
        <div className="col">
          <h1 className="text-center">
            Images within Src Folder Using Require & JSON File
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          {cards.map(({ src, title }, i) => (
            <Card
              key={i}
              src={require(`./images/${src}`).default}
              title={title}
            />
          ))}
        </div>
        <div className="col-8">
          <CodeGists />
        </div>
      </div>
    </>
  );
};

export default SrcFolderJSONImages;
