import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <h1>Image Style Transfer</h1>
          <p>(beta)</p>
        </div>
        <div className="row mt-5">
          <p>
            Based on Tonsorflow's Hub Model:
            "magenta/arbitrary-image-stylization-v1-256"
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
