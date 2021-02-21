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
        <div className="col-2"></div>
        <div className="col-8">
          <p>
            This app demonstrates three methods to render images which are
            stored as static assets. While it is possible to store images in the{" "}
            <code>public</code> folder, it is best practice to store them within
            the <code>src</code> folder.
          </p>
          <p>
            In each case, the path to the image is stored in an array of objects
            which is mapped over to render the image on a card. The third
            example uses an external file and <code>require</code> rather than
            the ES6 <code>import</code>, but either <code>require</code> or{" "}
            <code>import</code> can be used in the second example as well.
          </p>
          <p className="font-weight-bolder">
            Click the links above to see the code.
          </p>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
};

export default Home;
