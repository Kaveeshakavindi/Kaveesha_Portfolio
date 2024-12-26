import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";
import "./Navbar.css";
import SonarWave from "../SonarWave/SonarWave";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialBehance } from "react-icons/sl";
import ToggleButton from "../ToggleButton/ToggleButton";

export const Navbar = () => {
  const handleToggle = (isChecked) => {
    const body = document.body;
    if (isChecked) {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkmode', 'false');
      body.classList.add('light-mode');
      localStorage.setItem('lightmode', 'true');
    } else {
      body.classList.remove('light-mode');
      localStorage.setItem('lightmode', 'false');
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    }
  };
  const [activeNav, setActiveNav] = useState("#");
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <a href="#home" className="logo-name">
            Kaveesha
          </a>
          <a href="#home">
            <div className="sonar-container">
              <SonarWave />
            </div>
          </a>
        </div>
        <div className="contacts-container">
          <ul className="contact-ul">
            <li className="contact-li">
              <a href="https://www.behance.net/kaveeshfernand">
                <SlSocialBehance />
              </a>
            </li>
            <li className="contact-li">
              <a href="https://www.facebook.com/kaveesha.fernando.104855/">
                <SlSocialFacebook />
              </a>
            </li>
            <li className="contact-li">
              <a href="https://github.com/Kaveeshakavindi">
                <SlSocialGithub />
              </a>
            </li>
            <li className="contact-li">
              <a href="https://www.linkedin.com/in/kaveesha-fernando-b94301224">
                <SlSocialLinkedin />
              </a>
            </li>
            <li>
              <ToggleButton onToggle={handleToggle} />
            </li>
          </ul>
        </div>
        {/* <div className="navigation">
          <ul className="nav-list">
            <li className="nav-list-item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
                smooth
              >
                Get in touch
              </a>
            </li>

            <li className="nav-list-item">
            <a
                href="#blog"
                onClick={() => setActiveNav("#blog")}
                className={activeNav === "#blog" ? "active" : ""}
                smooth
              >
                Blog
              </a>
            </li>

            <li className="nav-list-item">
               <a
                href="#work"
                onClick={() => setActiveNav("#work")}
                className={activeNav === "#work" ? "active" : ""}
                smooth
              >
                Work
              </a>
            </li>
            <li className="nav-list-item">
            <a
                href="#service"
                onClick={() => setActiveNav("#service")}
                className={activeNav === "#service" ? "active" : ""}
                smooth
              >
                Service
              </a>
            </li>
            <li className="nav-list-item">
            <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={activeNav === "#home" ? "active" : ""}
                smooth
              >
                Home
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </BrowserRouter>
  );
};
