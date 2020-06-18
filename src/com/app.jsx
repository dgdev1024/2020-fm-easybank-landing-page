/**
 * @file com/app.jsx
 */

import React from "react";
import Header from "./header";
import HeroSection from "./hero-section";
import WhySection from "./why-section";
import ArticlesSection from "./articles-section";
import Footer from "./footer";

const App = () => (
  <main className="main">
    <Header />
    <HeroSection />
    <WhySection />
    <ArticlesSection />
    <Footer />
  </main>
);

export default App;
