/**
 * @file com/footer/index.jsx
 */

import React from "react";
import Logo from "../svg/logo";
import IconFacebook from "../svg/icon-facebook";
import IconYoutube from "../svg/icon-youtube";
import IconTwitter from "../svg/icon-twitter";
import IconPinterest from "../svg/icon-pinterest";
import IconInstagram from "../svg/icon-instagram";
import "./index.scss";

const Footer = () => (
  <footer className="footer">
    <div className="container footer__container">
      <div className="footer__column">
        <div className="footer__logo">
          <Logo
            className="footer__logo-svg logo-svg--footer"
            viewBox="0 0 139 20"
            footer={true}
          />
        </div>
        <div className="footer__social-links">
          <a
            href="#"
            className="footer__social-link footer__social-link--facebook"
            title="Facebook"
            aria-label="Facebook"
          >
            <IconFacebook />
          </a>
          <a
            href="#"
            className="footer__social-link footer__social-link--youtube"
            title="YouTube"
            aria-label="YouTube"
          >
            <IconYoutube />
          </a>
          <a
            href="#"
            className="footer__social-link footer__social-link--twitter"
            title="Twitter"
            aria-label="Twitter"
          >
            <IconTwitter />
          </a>
          <a
            href="#"
            className="footer__social-link footer__social-link--pinterest"
            title="Pinterest"
            aria-label="Pinterest"
          >
            <IconPinterest />
          </a>
          <a
            href="#"
            className="footer__social-link footer__social-link--instagram"
            title="Instagram"
            aria-label="Instagram"
          >
            <IconInstagram />
          </a>
        </div>
      </div>
      <div className="footer__column footer__links">
        <a href="#" className="footer__link link link--footer">
          About Us
        </a>
        <a href="#" className="footer__link link link--footer">
          Contact
        </a>
        <a href="#" className="footer__link link link--footer">
          Blog
        </a>
        <a href="#" className="footer__link link link--footer">
          Careers
        </a>
        <a href="#" className="footer__link link link--footer">
          Support
        </a>
        <a href="#" className="footer__link link link--footer">
          Privacy Policy
        </a>
      </div>
      <div className="footer__column footer__copyright-container">
        <button className="button--request-invite footer__request-invite">
          Request Invite
        </button>
        <p className="footer__copyright text text--small">
          &copy; 2020 Easybank. All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
