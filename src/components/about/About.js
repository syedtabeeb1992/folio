import React from "react";

import "./About.css";
import about from "../../assests/images/abbout.png";

import cv from "../../assests/Resumene.pdf";
import SkillComponent from "./SkillComponent";

const About = () => {
  return (
    <section className="box-shadow-beeb" id="about">
      <div className="container">
        <div className="title-section">&#60; about &#62;</div>

        <div className="about-inner-wrap">
          <div className="about-txt">
            <p>
              Hey, I am <span className="primary-color">Tabeeb</span>, a
              front-end web developer with over
              <span className="primary-color"> 7 years of experience. </span>
              I've worked with startups like{" "}
              <span className="primary-color">
                Bounce, Healthcaremagic and GlowRoad. &nbsp;
              </span>               
            </p>


            <p> I was also a part of a racing team and was  successfully able to bring together a bunch of petrol heads. 
              I have  raced bikes, won trophies,  have put in considerably high number of playtime in
              <span className="primary-color"> Dota2 and CountreStrike </span>,
              started a youtube channel and screwed it up and countless more endeavors  that list could take a while. I guess, I like to stay
              active.</p>

            <p>
              My        projects are developed 
              using   <span className="primary-color">HTML5, CSS3, SVG & JavaScript.</span> They are  mostly designed using
              <span className="primary-color"> Figma </span> and I also  love working with
              <span className="primary-color"> React </span> and other hip
              frameworks.
            </p>
            <p>If you fancy a chat, feel free to drop me a line.</p>

            <div className="skills-wrapper">
              <h2 className="primary-color"> My Skills</h2>

              <SkillComponent skill="HTML" level="95%" color="green" />
              <SkillComponent skill="CSS" level="95%" color="green" />
              <SkillComponent skill="JAVASCRIPT" level="90%" color="green" />
              <SkillComponent skill="REACT" level="70%" color="#1f37a9" />
              <SkillComponent skill="BOOTSTRAP" level="95%" color="green" />
              <SkillComponent skill="CSS FLEXBOX" level="95%" color="green" />
              <SkillComponent skill="CSS GRID" level="95%" color="green" />

              <SkillComponent skill="FIGMA" level="45%" color="#de79ff" />
              <SkillComponent skill="GIT" level="95%" color="green" />

              <SkillComponent skill="JQUERY" level="80%" color="#1f37a9" />
              <SkillComponent skill="WEBFLOW" level="50%" color="#de79ff" />
            </div>

            <div className="downloadcv">
              <a href={cv} target="_blank">
                DOWNLOAD CV
              </a>
            </div>
          </div>

          <div className="about-img">
            <img src={about} />
          </div>
        </div>

        <div className="title-section">&#60; / about &#62;</div>
      </div>
    </section>
  );
};

export default About;
