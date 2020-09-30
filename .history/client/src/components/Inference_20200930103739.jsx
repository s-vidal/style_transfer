import React, {useState, useRef} from "react";
import DropZone from "./DropZone";
import {transferImages} from "../lib/api";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 400);

const Inference = () => {
  const [imageOne, setImageOne] = useState();
  const [imageTwo, setImageTwo] = useState();
  const [binaryImage, setBinaryImage] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const stylizedImg = useRef(null);

  const handleOnClick = async () => {
    if (imageOne && imageTwo) {
      setBinaryImage()
      setShowSpinner(true);
      const binaryImage = await transferImages([imageOne, imageTwo]);
      setShowSpinner(false);
      setBinaryImage(binaryImage);
      scrollToRef(stylizedImg);
    }
  };

  return (
    <div className="mt-3 p-5 shadow rounded mb-5 pb-4">
      <div className="row d-flex justify-content-center pt-5">
        <DropZone header={"Image to transform"} setImage={setImageOne} />
        <h2 className="p-5 mt-5">+</h2>
        <DropZone header={"Style image"} setImage={setImageTwo} />
      </div>
      <div className="row d-flex justify-content-center">
        <button
          type="button"
          disabled={!imageTwo && !imageTwo}
          onClick={handleOnClick}
          className="btn btn-success pl-5 pr-5 p-2 mt-3"
        >
          Stylize!
        </button>
      </div>
      {showSpinner && (
        <div className="row justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {binaryImage && (
        <div
          ref={stylizedImg}
          className="row d-flex justify-content-center mt-5"
        >
          <h1 role="img" aria-label="emoji" className="ml-1" alt="arrow">
            👇
          </h1>
        </div>
      )}
      {binaryImage && (
        <>
          <div
            className="row d-flex justify-content-center m-0"
            style={{marginTop: -80}}
            // style={{minWidth: 500, maxWidth: 500}}
          >
            <img
              height={400}
              width="auto"
              src={URL.createObjectURL(binaryImage)}
              style={{
                // display: "block",
                maxWidth: "100%",
                maxHeight: "100%",
                // margin: "auto",
              }}
            />
          </div>
          <div className="row d-flex justify-content-center m-0">
            <a
              href={URL.createObjectURL(binaryImage)}
              download="stylized_img.png"
            >
              <h4>Download</h4>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Inference;
