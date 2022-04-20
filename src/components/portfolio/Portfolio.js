import React from "react";

import "./Portfolio.css";

import finkara from "../../assests/images/finkara.png";
import PortfolioSolo from "./PortfolioSolo";

const Portfolio = () => {
  return (
    <section className="box-shadow-beeb" id="portfolio">
      <div className="container">
        <div className="title-section">&#60; Recent Projects &#62;</div>
              <div className="inner-protfolio-wrap">
                    <PortfolioSolo link="https://www.finkara.in/" title="Finkara" classportfolio="finkara"/>
                    <PortfolioSolo link="https://www.bounceshare.com//" title="Bounce" classportfolio="bounce"/>
                    <PortfolioSolo link="https://www.wickedride.com/" title="WickedRide" classportfolio="wickedride"/>
                    <PortfolioSolo link="https://www.quorier.com/" title="Quorier" classportfolio="quorier"/>

                    <PortfolioSolo link="https://www.healthcaremagic.com/" title="Healthcaremagic" classportfolio="healthcaremagic"/>
                    
                    

              </div>
        <div className="title-section">&#60; /Recent Projects &#62;</div>
      </div>
    </section>
  );
};

export default Portfolio;
