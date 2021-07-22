import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faList,
  faUsers,
  faAddressBook,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../images/logo.jpg";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" activeClassName="active" className="nav-logo">
            <div className="logo">
              <img src={logo} alt="logo"></img>
            </div>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu "}>
            <li className="nav-item">
              <a href="">
                <FontAwesomeIcon
                  icon={faHome}
                  style={{ fontSize: "1.2rem", color: "white" }}
                />
              </a>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <a href="">
                <FontAwesomeIcon
                  icon={faAddressBook}
                  style={{ fontSize: "1.2rem", color: "white" }}
                />
              </a>
              <NavLink
                exact
                to="/Biografia"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Biografia
              </NavLink>
            </li>

            <li className="nav-item">
              <a href="">
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{ fontSize: "1.2rem", color: "white" }}
                />
              </a>
              <NavLink
                to="/Contacto"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contacto
              </NavLink>
            </li>

            <li className="nav-item">
              <a href="">
                <FontAwesomeIcon
                  icon={faList}
                  style={{ fontSize: "1.2rem", color: "white" }}
                />
              </a>
              <NavLink
                exact
                to="/Propuestas"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Propuestas
              </NavLink>
            </li>

            <li className="nav-item">
              <a href="">
                <FontAwesomeIcon
                  icon={faList}
                  style={{ fontSize: "1.2rem", color: "white" }}
                />
              </a>
              <NavLink
                exact
                to="/LaborSocial"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Labor Social
              </NavLink>
            </li>

            <div className="top-redes">
              <a href="https://www.youtube.com/channel/UC7gilKuSRhW1XyGF-D6LGVg">
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ fontSize: "2.0rem", color: "white" }}
                />
              </a>

              <a href="https://www.facebook.com/jduc19/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ fontSize: "2.0rem", color: "white" }}
                />
              </a>

              <a href="https://www.instagram.com/jduc19/?hl=es-la">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: "2.0rem", color: "white" }}
                />
              </a>

              <a href="https://www.instagram.com/jduc19/?hl=es-la">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ fontSize: "2.0rem", color: "white" }}
                />
              </a>
            </div>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
