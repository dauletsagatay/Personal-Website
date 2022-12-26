import React from "react";
import "./portfolio.css";
import FD from "../../assets/family-dash.PNG";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My recent projects</span>

      <div className="portfolio__container">
        <div className="portfolio__content">
          <h3 className="portfolio__title">Family Dash</h3>
          <p className="portfolio__description">
            My very first portfolio project. Family Dash is fully functioning,
            responsive social media app MVP developed using MERN stack: <br />-
            Node and Express on server/api side <br />- React and Redux on
            client side. <br />- MongoDB (Mongoose) on database side
          </p>
          <img src={FD} alt="" className="portfolio__photo" />
          <a
            download=""
            href="https://family-dash.onrender.com/"
            className="button button--flex portfolio__button"
          >
            Explore more...
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
