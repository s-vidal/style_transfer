import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";

const NavBar = () => {
  const [navLinks] = useState([
    {name: "Style Transfer", link: "/"},
    {name: "Super Resolution", link: "/super_resolution"},
  ]);
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    setCurrentPage(currentPath.substring(1));
  }, [location]);

  return (
    <div className="container">
      <div className="row bg-dark text-white">
        {/* <Link className="nav-link" to={"/"}>
          <div className="col-3 p-2 d-flex align-items-center">
            <img
              className="ml-4 mb-2"
              //   src={require("")}
              alt="logo"
              width="45"
            />
            <h2 className="p-2 m-0 text-white pl-2">Logo</h2>
          </div>
        </Link> */}
        <div className="col-7 pl-5 ml-3">
          
          <ul className="navbar-nav">
            <div className="row ml-5 mr-5 mt-1">
              {navLinks.map((item) => (
                <div
                  className="col-4 d-flex justify-content-center mt-2"
                  key={item.name}
                >
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to={item.link}
                      onClick={() => {
                        setCurrentPage(item.name.toLowerCase());
                      }}
                    >
                      <h6
                        className={
                          currentPage === item.name.toLowerCase()
                            ? "p-2 text-white nav-text active"
                            : "p-2 text-white nav-text"
                        }
                      >
                        {item.name}
                      </h6>
                    </Link>
                  </li>
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  
};

export default NavBar;
