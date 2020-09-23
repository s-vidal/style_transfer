import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <h1>Image Style Transfer</h1>
          <p>(Beta)</p>
        </div>
        <div className="row mt-3">
          <h5>
            Based on Tonsorflow-Hub's
            "magenta/arbitrary-image-stylization-v1-256" model
          </h5>
        </div>
      </div>
    </div>
  );
}

export default App;
