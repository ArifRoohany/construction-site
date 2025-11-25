import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import TeamMembers from "../components/TeamMembers";
import Banner from "../components/Banner";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Projects />
      <TeamMembers />
      <Feedback />
      <Banner />
      <Footer />
      <GoToTop />
    </>
  );
};

export default HomePage;
