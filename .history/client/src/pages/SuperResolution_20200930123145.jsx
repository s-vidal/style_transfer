import React, {useRef} from "react";

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
              <h5>Using Tonsorflow Hub's Module for</h5>
              <a
                href="https://www.tensorflow.org/hub/tutorials/image_enhancing"
                className="pl-1 pr-1 text-white"
              >
                <h5>
                  "Enhanced Super Resolution Generative Adversarial Network"
                </h5>
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
        <div className="vh-70 p-5 pb-0">
          <div className="container mt-4">
            <div className="row d-flex justify-content-center">
              <button
                className="btn btn-danger pl-5 pr-5 pt-2 pb-2"
                onClick={() => scrollToRef(tryOutref)}
              >
                Try it Out
              </button>
            </div>
          </div>
          <div className="container mb-3 pt-3">
            <div className="row pt-4">
              <h2>Description</h2>
            </div>
            <div className="row pt-3">
              <p className="">
                From the authors: "The Super-Resolution Generative Adversarial
                Network (SRGAN) [1] is a seminal work that is capable of
                generating realistic textures during single image
                super-resolution. However, the hallucinated details are often
                accompanied with unpleasant artifacts. To further enhance the
                visual quality, we thoroughly study three key components of
                SRGAN – network architecture, adversarial loss and perceptual
                loss, and improve each of them to derive an Enhanced SRGAN
                (ESRGAN)..."[1]
              </p>
            </div>
          </div>
          <div className="container pb-5">
            <div className="row pt-5 d-flex align-items-end">
              <h2>Example</h2>
              <a
                className="text-dark ml-3"
                href="https://colab.research.google.com/github/tensorflow/hub/blob/master/examples/colab/image_enhancing.ipynb#scrollTo=ABjkkJHC2jNL"
              >
                <h5 className="">from TF-Huv Colab</h5>
              </a>
            </div>
            <div className="row d-flex justify-content-center shadow p-5 mb-5 mt-4 rounded">
              <div className="pr-5">
                <h5 className="text-center">Original Low Res Image</h5>
                <img
                  className="ml-2"
                  src={require("../img/low_res_image.jpg")}
                  alt="tf"
                  width="300px"
                  height="auto"
                ></img>
              </div>
              <div>
                <h1 style={{marginTop: "150px"}}>→</h1>
              </div>
              <div className="pl-5">
                <h5 className="text-center">Modified Super Res Image</h5>
                <img
                  className="ml-2"
                  src={require("../img/super_res_image.jpg")}
                  alt="tf"
                  width="300px"
                  height="auto"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-0 pb-5 mb-5" ref={tryOutref}>
          <div className="row">
            <h2 className="ml-3 mb-3">Try it out</h2>
          </div>
        </div>
        <div className="container mb-5 pb-2">
          <div className="row">
            <h2>References</h2>
          </div>
          <div className="row">
            <p className="m-0">
              [1] Xintao Wang1 , Ke Yu1 , Shixiang Wu2 , Jinjin Gu3 , Yihao Liu4
              , Chao Dong2 , Chen Change Loy5 , Yu Qiao2 , Xiaoou Tang1
            </p>
            <a href="https://arxiv.org/pdf/1809.00219.pdf" className="">
              ESRGAN: Enhanced Super-Resolution Generative Adversarial Networks
            </a>
            <p className="ml-1">arXiv:1809.00219v2 [cs.CV] 17 Sep 2018</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperResolution;
