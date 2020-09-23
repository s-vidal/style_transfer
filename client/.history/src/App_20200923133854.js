import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="bg-dark text-white pt-5 pb-5">
        <div className="ml-5"> ~LOGO~ </div>
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
              src={require("./img/tf_logo.png")}
              alt="tf"
              width="22"
              height="22"
            ></img>
          </div>
        </div>
      </div>
      <div className="vh-70">
        <div className="container">
          <h1>A</h1>
        </div>
      </div>
      <div className="text-white bg-dark">
        <div className="container">
          <div className="row p-2">
            <p className="mr-4">lisence MIT</p>
            <p>Open Source Code:</p>
            <a
              className="ml-2 text-white"
              href="https://github.com/s-vidal/style_transfer"
            >
              github.com/s-vidal/style_transfer ❤️
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
