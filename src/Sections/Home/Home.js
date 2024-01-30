import React, { useEffect, useRef } from 'react';
import "./Home.css";
import { SolidButton } from "../../Components/SolidButton/SolidButton";
import GlassContainer from "../../Components/GlassContainer/GlassContainer";

export const Home = () => {

  const handleDownloadClick = () => {
    const pdfPath = process.env.PUBLIC_URL + "/files/resume.pdf";
    window.open(pdfPath, "_blank");
  };

  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal'); // Add a class for the reveal effect
          }
        });
      },
      {
        threshold: 0.3, // Adjust as needed
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home">
      <div className="home-container" ref={sectionRef}>
        <div className="home-about">
          <div className="home-about-p" ref={sectionRef}>From captivating</div>
          <div className="home-about-h3">
            UI Designs to Full-Stack Development,
          </div>
          <div className="home-about-h1">Hi! I'm Kaveesha Fernando.</div>
          <div className="home-about-p2" ref={sectionRef}>
          I specialize in crafting outstanding digital experiences, with a focus on developing RESTful APIs and seamless integrations. My expertise lies in both building and occasionally designing innovative <span className='home-span'>software solutions.</span>
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
