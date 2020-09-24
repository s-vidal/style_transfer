import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>Image Style Transfer</h1>
        <p>(Beta)</p>
      </div>
      <div className="row mt-3">
        <h5>Using Tonsorflow-Hub's </h5>
        <a
          href="https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2"
          className="pl-1 pr-1 text-white"
        >
          <h5>"magenta/arbitrary-image-stylization-v1-256"</h5>
        </a>
        <h5>model</h5>
        <img
          className="ml-2"
          src={require("../img/tf_logo.png")}
          alt="tf"
          width="22"
          height="22"
        ></img>
      </div>
    </div>
  );
};

export default Header;
