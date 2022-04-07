import React, {componentWillUnmount} from "react";


import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Herosection from "./components/hero-section/Herosection";
import Portfolio from "./components/portfolio/Portfolio";

import Container from "./components/UI/Container";

function App() {


  return (
    
    <div id="home">
      
    

      <Header></Header>

      <Herosection></Herosection>
      <About></About>
      <Experience></Experience>
      <Portfolio></Portfolio>

      <Contact></Contact>


      <section className="rest"></section>
    </div>
  );
}

export default App;
