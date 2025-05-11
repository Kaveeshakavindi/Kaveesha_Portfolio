import React, { useEffect, useRef } from "react";
import "./Home.css";
import homeImg from "../../assets/images/budget.png";
import { Skillset } from "../../Components/skillset/Skillset";

export const Home = () => {
  

  return (
    <section id="home">
      <div className="home-container reveal-section">
        <div className="home-about">
          <div className="home-about-h1">
            Where your <span className="h1-span">ideas</span> turn into{" "}
            <span className="h1-span">solutions</span>
          </div>
          <img src={homeImg} className="main-img"/>
          <div className="home-components-container">
            {/* <SolidButton onClick={handleDownloadClick} /> */}
            {/* <GlassContainer /> */}
          </div>
        </div>
        {/* <Stack/> */}
      </div>
    </section>
  );
};
