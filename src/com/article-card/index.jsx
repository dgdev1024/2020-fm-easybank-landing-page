/**
 * @file com/article-card/index.jsx
 */

import React from "react";
import "./index.scss";

const ArticleCard = ({ image, author, title, children }) => (
  <div className="article-card">
    <img src={image} alt={title} className="article-card__image" />
    <div className="article-card__caption">
      <p className="article-card__author text text--smaller text--align-left">
        By {author}
      </p>
      <a
        href="#"
        className="article-card__title heading heading--small heading--align-left"
      >
        {title}
      </a>
      <p className="article-card__body text text--small text--align-left">
        {children}
      </p>
    </div>
  </div>
);

export default ArticleCard;
