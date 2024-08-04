import React from "react";
import Welcome from "./homeSections/Welcome";
import AboutMe from "./homeSections/AboutMe";
import Experience from "./homeSections/Experience";
import Contact from "./homeSections/Contact";
import Work from "./homeSections/Work";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <AboutMe />
      <Experience />
      <Contact />
      <Work />
    </>
  );
};

export default HomePage;
