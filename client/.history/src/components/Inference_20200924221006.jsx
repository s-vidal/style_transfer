import React from "react";

const Inference = () => {
  return (
    <div className="mt-3 p-5 shadow rounded mb-5 pb-4">
      <div className="row d-flex justify-content-center pt-5">
        <DropZone header={"Image to transform"} />
        <h2 className="p-5 mt-5">+</h2>
        <DropZone header={"Style image"} />
      </div>
    </div>
  );
};

export default Inference;
