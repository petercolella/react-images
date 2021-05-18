import React from "react";
import Gist from "react-gist";

const CodeGists = () => {
  return (
    <div>
      <Gist
        id="3e39b09eb44a51b4b2535345426c53ad"
        file={"SrcFolderJSONImages.jsx"}
      />
      <Gist id="3e39b09eb44a51b4b2535345426c53ad" file={"cards-require.json"} />
    </div>
  );
};

export default CodeGists;
