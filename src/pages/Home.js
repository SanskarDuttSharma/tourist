import React from "react";
import "../App.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Map from "../components/Map/Map";
const Home = ({handleLogout}) => {
    return (
      <div id='home'>
        <Hero handleLogout={handleLogout} />
        <About />
        <Map />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  
}

export default Home;
