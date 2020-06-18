/**
 * @file com/articles-section/index.jsx
 */

import React from "react";
import ArticleCard from "../article-card";
import ImageCurrency from "../../img/image-currency.jpg";
import ImageConfetti from "../../img/image-confetti.jpg";
import ImagePlane from "../../img/image-plane.jpg";
import ImageRestaurant from "../../img/image-restaurant.jpg";
import "./index.scss";

const ArticlesSection = () => (
  <section className="section section--articles articles">
    <div className="container section__container articles__container">
      <h2 className="heading heading--medium articles__heading">
        Latest Articles
      </h2>
      <div className="articles__article-cards">
        <ArticleCard
          image={ImageCurrency}
          author="Claire Robinson"
          title="Receive money in any currency with no fees"
        >
          The world is getting smaller and we're becoming more mobile. So why
          should you be forced to only receive money in a single...
        </ArticleCard>
        <ArticleCard
          image={ImageRestaurant}
          author="Wilson Hutton"
          title="Treat yourself without worrying about money"
        >
          Our simple budgeting feature allows you to separate out your spending
          and set realistic limits each month. That means you...
        </ArticleCard>
        <ArticleCard
          image={ImagePlane}
          author="Wilson Hutton"
          title="Take your Easybank card wherever you go"
        >
          We want you to enjoy your travels. This is why we don't charge any
          fees on purchases while you're abroad. We'll even show you...
        </ArticleCard>
        <ArticleCard
          image={ImageConfetti}
          author="Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
        >
          After a lot of hard work by the whole team, we're excited to launch
          our closed beta. It's easy to request an invite through the site...
        </ArticleCard>
      </div>
    </div>
  </section>
);

export default ArticlesSection;
