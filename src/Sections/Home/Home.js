import React from "react";
import "./Home.css";
import { SolidButton } from "../../Components/SolidButton/SolidButton";
import GlassContainer from "../../Components/GlassContainer/GlassContainer";

export const Home = () => {

  const handleDownloadClick = () => {
    const pdfPath = process.env.PUBLIC_URL + "/files/resume.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <section id="home">
      <div className="home-container">
        <div className="home-about">
          <div className="home-about-p">From captivating</div>
          <div className="home-about-h3">
            UI Designs to Full-Stack Development,
          </div>
          <div className="home-about-h1">Hi! I'm Kaveesha Fernando,</div>
          <div className="home-about-p">
            turning your ideas into a digital reality that seamlessly blends
            creativity and technical prowess.
          </div>
          <div className="home-components-container">
            <SolidButton onClick={handleDownloadClick}/>
            <GlassContainer />
          </div>
          
        </div>
       
      </div>
    </section>
  );
};
