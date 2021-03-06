import React from "react";

const SuperResolution = () => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const tryOutref = useRef(null);
  return (
    <>
      <div>
        <div className="bg-dark text-white p-4 pt-5 pb-5">
          <div className="ml-5"> ~LOGO~ </div>
          <div className="container">
            <div className="row">
              <h1>Image Super Resolution using ESRGAN</h1>
              <p>(Beta)</p>
            </div>
            <div className="row mt-3">
              <h5>Using Tonsorflow-Hub's </h5>
              <a
                href="https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2"
                className="pl-1 pr-1 text-white"
              >
                <h5>
                  TensorFlow Hub Module for Enhanced Super Resolution Generative
                  Adversarial Network
                </h5>
              </a>
              <h5>model</h5>
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
        <div className="vh-70 p-5 pb-0">
          <div className="container pt-3 mt-4">
            <div className="row d-flex justify-content-center">
              <button
                className="btn btn-danger pl-5 pr-5 pt-2 pb-2"
                onClick={() => scrollToRef(tryOutref)}
              >
                Try it Out
              </button>
            </div>
          </div>
          <div className="container pb-5 mb-3 pt-3">
            <div className="row pt-4">
              <h2>Description</h2>
            </div>
            <div className="row pt-3">
              <p className="">
                From the authors: "...we present a method which combines the
                flexibility of the neural algorithm of artistic style with the
                speed of fast style transfer networks to allow real-time
                stylization using any content/style image pair. We build upon
                recent work leveraging conditional instance normalization for
                multi-style transfer networks by learning to predict the
                conditional instance normalization parameters directly from a
                style image. The model is successfully trained on a corpus of
                roughly 80,000 paintings and is able to generalize to paintings
                previously unobserved."[1]
              </p>
            </div>
          </div>
          <div
            className="container pb-5"
            // style={{borderBottom: "0px solid rgb(52, 58, 64)"}}
          >
            <div className="row pt-5 d-flex align-items-end">
              <h2>Example</h2>
              <a
                className="text-dark ml-3"
                href="https://colab.research.google.com/github/tensorflow/hub/blob/master/examples/colab/tf2_arbitrary_image_stylization.ipynb#scrollTo=dqB6aNTLNVkK"
              >
                <h5 className="">from TF-Huv Colab</h5>
              </a>
            </div>
            <div className="row d-flex justify-content-center shadow p-5 mb-5 mt-4 rounded">
              <img
                className="ml-2"
                src={require("../img/turtle.png")}
                alt="tf"
                width="100%"
                height="auto"
              ></img>
            </div>
          </div>
        </div>
        <div className="container p-0 pb-5 mb-5" ref={tryOutref}>
          <div className="row">
            <h2 className="ml-3 mb-3">Try it out</h2>
            <h4 className="mt-2 ml-3">
              (use high quality images for better results)
            </h4>
          </div>
        </div>
        <div className="container mb-5 pb-2">
          <div className="row">
            <h2>References</h2>
          </div>
          <div className="row">
            <p className="m-0">
              [1] Golnaz Ghiasi, Honglak Lee, Manjunath Kudlur, Vincent
              Dumoulin, Jonathon Shlens.
            </p>
            <a href="https://arxiv.org/abs/1705.06830" className="">
              Exploring the structure of a real-time, arbitrary neural artistic
              stylization network.
            </a>
            <p className="ml-1">
              Proceedings of the British Machine Vision Conference (BMVC), 2017.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperResolution;
