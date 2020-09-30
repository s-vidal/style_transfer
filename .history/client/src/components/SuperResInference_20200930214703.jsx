import React, {useState, useRef} from "react";
import DropZone from "./DropZone";
import {getSuperResImg} from "../lib/api";

const SuperResInference = () => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 400);

  const [imageOne, setImageOne] = useState();
  const [imageTwo, setImageTwo] = useState();
  const [binaryImage, setBinaryImage] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const superResImg = useRef(null);

  const handleOnClick = async () => {
    if (imageOne) {
      setBinaryImage(false);
      setShowSpinner(true);
      const binaryImage = await getSuperResImg(imageOne);
      setShowSpinner(false);
      setBinaryImage(binaryImage);
      scrollToRef(superResImg);
    }
  };

  return (
    <div className="mt-3 p-5 shadow rounded mb-5 pb-4">
      <div className="row d-flex justify-content-center pt-5">
        <DropZone header={"image"} setImage={setImageOne} />
      </div>
      <div className="row d-flex justify-content-center">
        <button
          type="button"
          disabled={!imageOne}
          onClick={handleOnClick}
          className="btn btn-success pl-5 pr-5 p-2 mt-3"
        >
          Get Super Res!
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
          ref={superResImg}
          className="row d-flex justify-content-center mt-5"
        >
          <h1 role="img" aria-label="emoji" className="ml-1" alt="arrow">
            👇
          </h1>
        </div>
      )}
      {binaryImage && (
        <>
          <div className="row d-flex justify-content-center m-0">
            <img
              className="m-5"
              height={250}
              width="auto"
              src={URL.createObjectURL(binaryImage)}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
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

export default SuperResInference;
