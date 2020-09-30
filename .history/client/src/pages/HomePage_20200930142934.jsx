import React from "react";
import "../components/HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="bg-dark text-white p-4 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <h1>TensorFlow Hub Projects Demo's</h1>
          </div>
          <div className="row mt-3">
            <h5>Collection of</h5>
            <a
              href="https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2"
              className="pl-1 pr-1 text-white"
            >
              <h5>FT-Hub trained machine learning models</h5>
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
      </div>
      <div className="vh-59 p-5 pb-0">
        <div className="container">
          <div>
            <h2 className="mt-2">Current Projects</h2>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="home-item shadow m-5">
              <h5 className="text-center">Style Transfer</h5>
            </div>
            <div className="home-item shadow m-5">
              {" "}
              <h5 className="text-center"> Super Resolution</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
