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
   <section id="testimonials" className="py-24 px-6" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto">
 
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.25em] uppercase mb-3 font-medium"
            style={{ color: 'var(--main-var-color)' }}
          >
            Development
          </p>
          <h2
            className="text-4xl font-light leading-tight"
            style={{ color: 'var(--true-color)' }}
          >
            Featured Work
          </h2>
          <div
            className="mt-4 h-px w-12"
            style={{ background: 'var(--stroke-color)' }}
          />
        </div>

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
    </section>
  );
};
