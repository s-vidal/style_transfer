import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="row d-flex justify-content-center bg-dark text-white">
        <Link className="nav-link p-2" to={"/home-page"}>
          <div className="ml-5"> ~LOGO~ </div>
        </Link>
        <Link className="nav-link p-2" to={"/"}>
          Style Transfer
        </Link>
        <Link className="nav-link p-2" to={"/super-resolution"}>
          Super Resolution
        </Link>
      </div>
    </>
  );
};

export default NavBar;
