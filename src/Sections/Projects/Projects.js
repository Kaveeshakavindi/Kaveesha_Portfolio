import React, { useEffect, useState } from "react";
import "./projects.css";
import { projectsData } from "../../data";
import { ProjectCard } from "../../Components/ProjectCard";

export const Projects = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(current);
    }
  };
  const next = () => {
    if (current != projectsData.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(current);
    }
  };

  return (
    <section id="projects">
      <div className="section-container">
        <div className="projects-container reveal-section">
          <div className="sectionTitle">Featured Work</div>
          <div className="projects-cards-container">
            <ProjectCard
              project={projectsData[current]}
              onPrev={prev}
              onNext={next}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
