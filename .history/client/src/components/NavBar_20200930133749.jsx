import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="container">
        <div className="row bg-dark text-white">
          <Link className="nav-link"></Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
