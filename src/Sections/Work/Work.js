// Work.js

import React from "react";
import { useInView } from "react-intersection-observer";
import "./Work.css";
import { MdOutlineArrowOutward } from "react-icons/md";

export const Work = () => {
  

const WorkCard = ({ title, description, imgUrl, skills}) => {
  
  return (
  
    <div className="work-card">
      <div className="work-card-image-container">
        <img src={imgUrl} alt="project" className="work-card-image" />
      </div>
      <div className="work-card-text">
        <div className="work-card-title-container">
          <div className="work-card-title">{title}</div>
          <MdOutlineArrowOutward className="work-card-arrow" />
        </div>
        <div className="work-card-description">{description}</div>
        <div className="work-skill-container">
          {skills.map((skill, index) => (
            <div key={index} className="work-skill">
              {skill}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.5, // Adjust this threshold as needed
});

  return (
    
    <section id="work" ref={ref}>
      <div className="section-container">
        <div className={`work-section-container ${inView ? "visible" : ""}`}>
          <div className="sectionTitle">Projects</div>
          
      
          <div className="timeline" >
            <div className="work-grid-row">
            <WorkCard
              title={"A hub for craftmanship"}
              description={
                "Craft Masters App - Connecting skilled artisans with those in need! Check out the sleek UI design on Behance and dive into the world where craftsmanship meets technology. "
                
              }
              imgUrl={"/images/portfolio1.jpeg"}
              skills={["React", "Java"]}
              
            />
            <div className="column-divider"></div>
            <WorkCard
              title={"A hub for craftmanship"}
              description={
                "Craft Masters App - Connecting skilled artisans with those in need! Check out the sleek UI design on Behance and dive into the world where craftsmanship meets technology. "
              }
              imgUrl={"/images/portfolio1.jpeg"}
              skills={["React", "Python"]}
             
            />
            </div>
            <div className="work-grid-row">
            <WorkCard
              title={"A hub for craftmanship"}
              description={
                "Craft Masters App - Connecting skilled artisans with those in need! Check out the sleek UI design on Behance and dive into the world where craftsmanship meets technology. "
              }
              imgUrl={"/images/portfolio1.jpeg"}
              skills={["React", "CSS"]}
           
            />
            <div className="column-divider"></div>
            <WorkCard
              title={"A hub for craftmanship"}
              description={
                "Craft Masters App - Connecting skilled artisans with those in need! Check out the sleek UI design on Behance and dive into the world where craftsmanship meets technology. "
              }
              imgUrl={"/images/portfolio1.jpeg"}
              skills={["React", "CSS"]}
           
            />
            </div>
            <div className="work-grid-row">
            <WorkCard
              title={"A hub for craftmanship"}
              description={
                "Craft Masters App - Connecting skilled artisans with those in need! Check out the sleek UI design on Behance and dive into the world where craftsmanship meets technology. "
              }
              imgUrl={"/images/portfolio1.jpeg"}
              skills={["React", "CSS"]}
           
            />
            <div className="column-divider"></div>
            <WorkCard
              title={"A hub for craftmanship"}
              description={
                "Craft Masters App - Connecting skilled artisans with those in need! Check out the sleek UI design on Behance and dive into the world where craftsmanship meets technology. "
              }
              imgUrl={"/images/portfolio1.jpeg"}
              skills={["React", "CSS"]}
           
            />
            </div>
          </div>
        </div>
        </div>
      
    </section>
  );
};
