/**
 * @file com/hero-section/index.jsx
 */

import React from "react";
import ImageMockups from "../../img/image-mockups.png";
import "./index.scss";

const HeroSection = () => (
  <section className="section section__hero hero">
    <div className="container section__container section__container--hero hero__container">
      <img
        src={ImageMockups}
        alt="Next Generation Digital Banking"
        className="image image--hero hero__image"
      />
      <div className="hero__caption">
        <h1 className="heading heading--large heading--align-left-on-desktop">
          Next generation digital banking
        </h1>
        <p className="text text--align-left-on-desktop text--small">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="hero__request-invite button button--request-invite">
          Request Invite
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
