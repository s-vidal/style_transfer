import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    setCurrentPage(currentPath.substring(1));
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-center bg-dark pt-3 pb-3">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link pl-5 pr-5" to={"/home-page"}>
            <div className="ml-5 text-white"> ~LOGO~ </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link pl-5 pr-5 text-white" to={"/"}>
            <p
              className={
                currentPage === item.name.toLowerCase()
                  ? "p-2 text-white nav-text active"
                  : "p-2 text-white nav-text"
              }
            >
              {" "}
              Style Transfer
            </p>
          </Link>
        </li>
        <li className="nav-item active">
          <Link
            className="nav-link pl-5 pr-5 text-white"
            to={"/super-resolution"}
          >
            Super Resolution
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
