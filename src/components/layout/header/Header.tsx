"use client";

import React from "react";
import scss from "./Header.module.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const scroolLinks = [
  {
    name: "About",
    link: "about",
  },
  {
    name: "Experience",
    link: "experience",
  },
  {
    name: "Contact",
    link: "contact",
  },
  {
    name: "Work",
    link: "work",
  },
];

const Header = () => {
  return (
    <header className={scss.Header}>
      <div className={scss.scrool}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.logo}>
              <ScrollLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-110}
                duration={600}
              >
                <h1>IslamDev</h1>
              </ScrollLink>
            </div>
            <nav>
              <ul>
                {scroolLinks.map((item, index) => (
                  <li>
                    <ScrollLink
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      {item.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={scss.resume}>
              <button>Resume</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
