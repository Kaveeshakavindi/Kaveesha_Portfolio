// Work.js

import React, { useEffect, useRef } from "react";
import "./Work.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import { workData } from "../../data";

export const Work = () => {
  const WorkCard = ({ title, description, imgUrl, skills, href }) => {
    return (
      <div className="work-card">
        <a href={href}>
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
        </a>
      </div>
    );
  };

  return (
    <section id="work">
      <div className="section-container">
        <div className="work-section-container reveal-section">
          <div className="sectionTitle">Projects</div>

          <div className="timeline">
            {workData.map((item, index) => (
              <WorkCard
                key={index}
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
                skills={item.skills}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
