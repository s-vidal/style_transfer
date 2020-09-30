import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavBar = () => {
  const [navLinks] = useState([
    {name: "Style Transfer", link: "/"},
    {name: "Super Resolution", link: "/experiments"},
    // { name: "Inference", link: "/inference" },
  ]);
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    setCurrentPage(currentPath.substring(1));
  }, [location]);

  return (
    <div className="container sticky">
      <div className="row bg-orange shadow">
        <Link className="nav-link" to={"/"}>
          <div className="col-3 p-2 d-flex align-items-center">
            <img
              className="ml-4 mb-2"
              src={require("../images/cellebrite-circle.png")}
              alt="logo"
              width="45"
            />
            <h2 className="p-2 m-0 text-white pl-2">CelleTrain</h2>
          </div>
        </Link>
        <div className="col-7 pl-5 ml-3">
          {currentPage !== "" && (
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
                        <h4
                          className={
                            currentPage === item.name.toLowerCase()
                              ? "p-2 text-white nav-text active"
                              : "p-2 text-white nav-text"
                          }
                        >
                          {item.name}
                        </h4>
                      </Link>
                    </li>
                  </div>
                ))}
                <div className="col-4 d-flex justify-content-center mt-2">
                  <li className="nav-item">
                    <span className="nav-link">
                      <h5 className="p-2 text-dark">Inference</h5>
                    </span>
                  </li>
                </div>
              </div>
            </ul>
          )}
        </div>
        <div className="col-1 mt-2 ml-4">
          <div
            className="mt-3 ml-5 pl-4 pt-1 pointer"
            onClick={
              theme === themes.dark
                ? () => setTheme(themes.white)
                : () => setTheme(themes.dark)
            }
          >
            {theme && <FontAwesomeIcon icon={faMoon} flip="horizontal" />}
            {!theme && <FontAwesomeIcon icon={faSun} className="text-white" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
