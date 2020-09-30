import React from "react";

const HomePage = () => {
  return (
    <div className="bg-dark text-white p-4 pt-5 pb-5">
      <div className="container">
        <div className="row">
          <h1>TensorFlow Hub Projects Demo's</h1>
        </div>
        <div className="row mt-3">
          <h5>Collection of FT-Hub trained machine learning models</h5>
          <a
            href="https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2"
            className="pl-1 pr-1 text-white"
          >
            <h5>website</h5>
          </a>
          <img
            className="ml-3"
            src={require("../img/tf_logo.png")}
            alt="tf"
            width="22"
            height="22"
          ></img>
        </div>
      </div>
      <div className="vh-70 p-5 pb-0"></div>
    </div>
  );
};

export default HomePage;
