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
            <code>public</code> folder (the first method), it is best practice
            to store them within the <code>src</code> folder as files in the{" "}
            <code>public</code> folder will not be processed by webpack.
          </p>
          <p>
            In each case, the image source is stored in an array of objects
            which is mapped over to render the image on a card. However, the
            second and third methods use images stored in a folder adjacent to
            their container file. The second example uses the ES6{" "}
            <code>import</code>, and the third example uses an external JSON
            file, <i>similar to the first example</i>, and <code>require</code>.
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
