import React from "react";

const Footer = () => {
  return (
    <div className="text-white bg-dark">
      <div className="container">
        <div className="row p-2">
          <p className="mr-4">MIT Lisence</p>
          <p>Open Source Code:</p>
          <a
            className="ml-2 text-white"
            href="https://github.com/s-vidal/style_transfer"
          >
            <span>github.com/s-vidal/style_transfer</span>
          </a>
          <p className="ml-3 mr-1">  with </p>
          <span role="img" aria-label="emoji" className="ml-1">
            ❤️
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
