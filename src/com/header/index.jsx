/**
 * @file com/header/index.jsx
 */

import React, { useState } from "react";
import Logo from "../svg/logo";
import "./index.scss";

const Header = () => {
  const [navShown, setNavShown] = useState(false);
  const toggleNav = () => setNavShown(!navShown);

  return (
    <>
      <header className={`header ${navShown ? "header--nav-shown" : ""}`}>
        <div className="container header__container">
          <div className="header__logo">
            <Logo className="header__logo-svg logo-svg" viewBox="0 0 139 20" />
          </div>
          <button
            className="header__menu-toggle button button--menu-toggle"
            aria-label="Toggle Navigation"
            onClick={toggleNav}
          ></button>
          <button className="button button--request-invite header__request-invite">
            Request Invite
          </button>
          <nav className="header__nav">
            <a href="#" className="header__link link link--header">
              Home
            </a>
            <a href="#" className="header__link link link--header">
              About
            </a>
            <a href="#" className="header__link link link--header">
              Contact
            </a>
            <a href="#" className="header__link link link--header">
              Blog
            </a>
            <a href="#" className="header__link link link--header">
              Careers
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
