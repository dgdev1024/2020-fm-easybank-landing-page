/**
 * @file com/app.jsx
 */

import React from "react";
import Header from "./header";
import HeroSection from "./hero-section";
import WhySection from "./why-section";

const App = () => (
  <main className="main">
    <Header />
    <HeroSection />
    <WhySection />
  </main>
);

export default App;
