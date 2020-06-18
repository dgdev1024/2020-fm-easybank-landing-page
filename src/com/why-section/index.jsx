/**
 * @file com/why-section/index.jsx
 */

import React from "react";
import IconOnline from "../../img/icon-online.svg";
import IconBudgeting from "../../img/icon-budgeting.svg";
import IconOnboarding from "../../img/icon-onboarding.svg";
import IconApi from "../../img/icon-api.svg";
import "./index.scss";

const WhySection = () => (
  <section className="section section--why why">
    <div className="container section__container why__container">
      <h2 className="why__heading heading heading--medium heading--align-left-on-desktop">
        Why choose Easybank?
      </h2>
      <p className="why__text text text--small text--align-left-on-desktop">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className="why__cards">
        <div className="why__card">
          <img
            src={IconOnline}
            alt="Online Banking"
            className="why__card-image"
          />
          <h3 className="why__card-heading heading heading--small heading--align-left">
            Online Banking
          </h3>
          <p className="why__card-text text text--small text--align-left-on-desktop">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="why__card">
          <img
            src={IconBudgeting}
            alt="Simple Budgeting"
            className="why__card-image"
          />
          <h3 className="why__card-heading heading heading--small heading--align-left">
            Simple Budgeting
          </h3>
          <p className="why__card-text text text--small text--align-left-on-desktop">
            See exactly where your money goes each month. Receive notifications
            when you're close to hitting your limits.
          </p>
        </div>
        <div className="why__card">
          <img
            src={IconOnboarding}
            alt="Fast Onboarding"
            className="why__card-image"
          />
          <h3 className="why__card-heading heading heading--small heading--align-left">
            Fast Onboarding
          </h3>
          <p className="why__card-text text text--small text--align-left-on-desktop">
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="why__card">
          <img src={IconApi} alt="Open API" className="why__card-image" />
          <h3 className="why__card-heading heading heading--small heading--align-left">
            Open API
          </h3>
          <p className="why__card-text text text--small text--align-left-on-desktop">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhySection;
