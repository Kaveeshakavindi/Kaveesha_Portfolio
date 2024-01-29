import React from "react";
import "./Footer.css";
import SonarWave from "../SonarWave/SonarWave";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialBehance } from "react-icons/sl";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
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
        </div>

       

        <div className="footer-end">

          <div className="footer-go-top">
            <a href="#home">Back to top</a>
          </div>

          <div className="footer-socials">
            <div className="footer-contacts-container">
              <ul className="footer-contacts-ul">
              <li className="footer-contact-li">
                  <a href="https://www.linkedin.com/in/kaveesha-fernando-b94301224">
                    <SlSocialLinkedin />
                  </a>
                </li>
                <li className="footer-contact-li">
                  <a href="https://github.com/Kaveeshakavindi">
                    <SlSocialGithub />
                  </a>
                </li>
                <li className="footer-contact-li">
                  <a href="https://www.behance.net/kaveeshfernand">
                    <SlSocialBehance />
                  </a>
                </li>
                <li className="footer-contact-li">
                  <a href="https://www.facebook.com/kaveesha.fernando.104855/">
                    <SlSocialFacebook />
                  </a>
                </li>
                
                
              </ul>
            </div>
          </div>
          <div className="footer-rights">
            2024 Kaveesha Fernando. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
