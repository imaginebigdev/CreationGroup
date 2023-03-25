/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Link } from "react-scroll";
import appData from "../../data/app.json";
import { handleMobileDropdown } from "../../common/navbar";

const NavbarArch = ({ navbarRef, theme }) => {
  return (
    <nav className="navbar navbar-expand-lg" ref={navbarRef}>
      <div className="container">
        <a className="logo" href="/">
          {theme ? (
            theme === "themeL" ? (
              <img src={appData.darkLogo} alt="logo" />
            ) : (
              <img src={appData.lightLogo} alt="logo" />
            )
          ) : (
            <img src={appData.lightLogo} alt="logo" />
          )}
        </a>
        <h4>Creation Group</h4>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={handleMobileDropdown}
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="arch-slider"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Sobre nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="works"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Trabajos
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarArch;
