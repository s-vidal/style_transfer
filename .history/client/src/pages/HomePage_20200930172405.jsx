import React from "react";
import {useHistory} from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const history = useHistory();
  return (
    <>
      <div className="bg-dark text-white p-4 pb-5">
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
      <div className="container " style={{padding: "26px 0px 0px 0px"}}>
        <div>
          <h2 className="mt-2">Current Projects</h2>
          <h5 className="mb-4">Designed to display and test TF-Hb models</h5>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="mt-5 mb-0 pr-5">
            <h5 className="text-center pb-2">Style Transfer</h5>
            <div
              className="home-item shadow"
              onClick={() => {
                history.push("/style-transfer");
              }}
            >
              <img
                className="m-5"
                height={250}
                width="auto"
                src={require("../img/style_transfer_logo.png")}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <p className="text-right pt-2 source">[1]</p>
          </div>
          <div className="m-5 mb-0">
            <h5 className="text-center pb-2"> Super Resolution</h5>
            <div
              className="home-item shadow"
              onClick={() => {
                history.push("/super-resolution");
              }}
            >
              <img
                className="m-5"
                height={250}
                width="auto"
                src={require("../img/super_res_logo_crop.png")}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <p className="text-right pt-2 source">[2]</p>
          </div>
        </div>
        <div className="row source">
          <p>[1] Source:</p>
          <a className="ml-2" href="https://www.tensorflow.org/hub">
            tensorflow.org/hub
          </a>
          <p>; [2] Source:</p>
          <a
            className="ml-2"
            href="https://www.tensorflow.org/hub/tutorials/image_enhancing"
          >
            tensorflow.org/hub/tutorials/image_enhancing
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
