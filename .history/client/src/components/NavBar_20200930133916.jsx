import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="row d-flex justify-content-center bg-dark text-white">
        <Link className="nav-link" to={"/"}>
          Style Transfer
        </Link>
        <Link className="nav-link" to={"/"}>
          Style Transfer
        </Link>
      </div>
    </>
  );
};

export default NavBar;
