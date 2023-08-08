import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../../assets/lejhro.png";
import bluelogo from "../../assets/lejhroblue.png";
import "./Navbar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Navbar = () => {
  const [showSecondNavbar, setShowSecondNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const blogsHeading = document.querySelector("#blogs-heading");
      if (blogsHeading) {
        const position = blogsHeading.getBoundingClientRect().top;
        setShowSecondNavbar(position <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className="navbar --bs-warning bg-tertiary custom-navbar ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="image" src={logo} alt="logo" />
          </a>
          <ul className="pages">
            <li>Innovations</li>
            <li>Services</li>
            <li>Bootcamp</li>
          </ul>
          <button
            className="btn btn-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img className="image" src={bluelogo} alt="logo" />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="sidelist">Innovations</li>
                <li className="sidelist">Bootcamp</li>
                <li className="sidelist">Services</li>
                <li className="sidelist">About</li>
                <li className="sidelist">Contact us</li>
                <li className="sidelist">Blogs</li>
              </ul>
              <div className="sideIcons">
                <li>
                  <TwitterIcon className="icon" />
                </li>
                <li>
                  <FacebookIcon className="icon" />
                </li>
                <li>
                  <LinkedInIcon className="icon" />
                </li>
                <li>
                  <YouTubeIcon className="icon" />
                </li>
              </div>
            </div>
          </div>
        </div>
        <p id="blogs-heading">Blogs</p>
      </nav>
      {showSecondNavbar && (
        <nav
          className="navbar --bs-warning secondcustom-navbar "
          style={{ position: "fixed" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className="image" src={bluelogo} alt="logo" />
            </a>
            <div>
              <span className="button-label">
                Let's Talk <ArrowRightAltIcon />
              </span>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <img className="image" src={bluelogo} alt="logo" />
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="sidelist">Innovations</li>
                  <li className="sidelist">Bootcamp</li>
                  <li className="sidelist">Services</li>
                  <li className="sidelist">About</li>
                  <li className="sidelist">Contact us</li>
                  <li className="sidelist">Blogs</li>
                </ul>
                <div className="sideIcons">
                  <li>
                    <TwitterIcon className="icon" />
                  </li>
                  <li>
                    <FacebookIcon className="icon" />
                  </li>
                  <li>
                    <LinkedInIcon className="icon" />
                  </li>
                  <li>
                    <YouTubeIcon className="icon" />
                  </li>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
