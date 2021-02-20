import React from "react";

const Home = () => {
  return (
    <>
      <div className="row my-5">
        <div className="col">
          <h1 className="text-center">React Images</h1>
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <p>
            This app demonstrates three methods to render images when they are
            part of a data set being mapped over.
          </p>
          <p>Click on the links above for an explanation of each one.</p>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
};

export default Home;
