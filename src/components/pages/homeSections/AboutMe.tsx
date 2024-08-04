import React from "react";
import scss from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section id="about" className={scss.AboutMe}>
      <div className={scss.content}>
        <h1>AboutMe</h1>
      </div>
    </section>
  );
};

export default AboutMe;
