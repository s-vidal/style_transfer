import React, {useState} from "react";
import DropZone from "./DropZone";

const Inference = () => {
  const [imageOne, setImageOne] = useState();
  const [imageTwo, setImageTwo] = useState();
  
  return (
    <div className="mt-3 p-5 shadow rounded mb-5 pb-4">
      <div className="row d-flex justify-content-center pt-5">
        <DropZone header={"Image to transform"} setImageOne={setImageOne} />
        <h2 className="p-5 mt-5">+</h2>
        <DropZone header={"Style image"} setImageTwo={setImage}/>
      </div>
    </div>
  );
};

export default Inference;
