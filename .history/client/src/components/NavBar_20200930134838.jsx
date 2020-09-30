import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="row d-flex justify-content-center bg-dark text-white">
          <nav className="navbar">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link className="nav-link pl-5 pr-5" to={"/home-page"}>
                            <div className="ml-5"> ~LOGO~ </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link pl-5 pr-5" to={"/"}>
                            Style Transfer
                        </Link>
                    </li>
                    <li className="nav-item">   
                        <Link className="nav-link pl-5 pr-5" to={"/super-resolution"}>
                            Super Resolution
                        </Link>
                    </li>
                </ul>
      <nav/>
     
     
      </div>
    </>
  );
};

export default NavBar;
