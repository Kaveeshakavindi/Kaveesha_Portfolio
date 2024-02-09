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
          <div className="text3" ref={sectionRef}>From captivating</div>
          <div className="text2">
            UI Designs to Full-Stack Development,
          </div>
          <div className="text1">Hi! I'm Kaveesha Fernando.</div>
          <div className="text2" ref={sectionRef}>
          Specializing in the creation of exceptional digital experiences, the emphasis is placed on the development of APIs and the seamless integration of various components. Proficient in both the construction and occasional design of <span className='text3'>innovative solutions.</span>
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
