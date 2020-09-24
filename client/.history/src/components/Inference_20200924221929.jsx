import React, {useState, useEffect} from "react";
import DropZone from "./DropZone";

const Inference = () => {
  const [imageOne, setImageOne] = useState();
  const [imageTwo, setImageTwo] = useState();

  useEffect(() => {console.log({"imageOne": imageOne, "imageTwo"});}, [imageOne, imageTwo]);

  return (
    <div className="mt-3 p-5 shadow rounded mb-5 pb-4">
      <div className="row d-flex justify-content-center pt-5">
        <DropZone header={"Image to transform"} setImage={setImageOne} />
        <h2 className="p-5 mt-5">+</h2>
        <DropZone header={"Style image"} setImage={setImageTwo} />
      </div>
    </div>
  );
};

export default Inference;
