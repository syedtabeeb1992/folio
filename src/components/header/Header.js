import React, { useState } from "react";
import { FaBars, FaBeer } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [slide, setSlide] = useState(false);

  const onSlideHandler = () => {
    setSlide(!slide);
  };

  const backdrop = <div className="backdrop" onClick={onSlideHandler}></div>;

  return (
    <header className="box-shadow-beeb">
      {slide ? backdrop : ""}

      <div className="container flex">
        <div className="logo-container">
          Syed
          <span className="primary-color">
            <strong> Tabeeb </strong>
          </span>
        </div>

        <div className="hamburder" onClick={onSlideHandler}>
          <FaBars />
        </div>
        <div className={`nav-links-wrapper ${slide ? "width-clicked" : ""}`}>
          <div className="nav-link active" >
                <a href="#hero" onClick={onSlideHandler}> HOME </a>
          </div>
          <div className="nav-link">
            <a href="#about" onClick={onSlideHandler}>ABOUT</a>
          </div>
          <div className="nav-link">
            <a href="#exp" onClick={onSlideHandler}>EXPERIENCE</a>
          </div>
          <div className="nav-link">
            <a href="#portfolio" onClick={onSlideHandler}>PORTFOLIO</a>
          </div>
          {/* <div className="nav-link">
            <span>BLOG</span>
          </div> */}
          <div className="nav-link">
            <a href="#contact" onClick={onSlideHandler}>CONTACT</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
