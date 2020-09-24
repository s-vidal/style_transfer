import React from "react";
import DropZone from "./DropZone";

const Inference = () => {
  return (
    <div className="mt-3 p-5 shadow rounded mb-5 pb-4">
      <div className="row d-flex justify-content-center pt-5">
        <DropZone header={"Image to transform"} set/>
        <h2 className="p-5 mt-5">+</h2>
        <DropZone header={"Style image"} />
      </div>
    </div>
  );
};

export default Inference;
