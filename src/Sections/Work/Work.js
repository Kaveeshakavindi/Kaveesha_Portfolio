// Work.js

import React, { useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";
import "./Work.css";
import { MdOutlineArrowOutward } from "react-icons/md";

export const Work = () => {
  

const WorkCard = ({ title, description, imgUrl, skills,href}) => {
  
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
    
    <section id="work" >
      <div className="section-container">
        <div className="work-section-container" ref={sectionRef}>
          <div className="sectionTitle">Projects</div>
          
      
          <div className="timeline" >
            <div className="work-grid-row">
              
            <WorkCard
              title={"Portfolio Website"}
              description={
                "A sleek portfolio website showcasing creativity and skills, crafted with React.js."
                
              }
              imgUrl={'/images/portfolio.png'}
              skills={["React", "JavaScript", "CSS" ]}
              href={'"https://github.com/Kaveeshakavindi/Kaveesha_Portfolio.git"'}
            />
          
            <div className="column-divider"></div>
            
            <WorkCard
              title={"Craft Masters"}
              description={
                "Experience craftsmanship at its finest! Craft Masters, a React Native app, connects users with skilled craftsmen, featuring a stylish dark and light theme. "
              }
              imgUrl={"./images/craftmasters.png"}
              skills={["React Native", "JavaScript","Figma"]}
             href={'https://github.com/Kaveeshakavindi/Horizontally-scrollable-tab-bar.git'}
            />
         
            </div>
            <div className="work-grid-row">
             
            <WorkCard
              title={"Adventura"}
              description={
                "Embark on a journey with Adventura, a React Native travel app, helping users discover and explore tourist attractions around the globe."
              }
              imgUrl={"./images/adventura.png"}
              skills={["React Native", "TypeScript", "Figma"]}
           href={"https://github.com/Kaveeshakavindi/Adventura.git"}
            />
          
            <div className="column-divider"></div>
        
            <WorkCard
              title={"Blueberi"}
              description={
                "Elevate your style with Blueberi, an e-commerce clothing website. Built with React.js and TypeScript, it offers a seamless shopping experience."
              }
              imgUrl={"./images/blueberi.png"}
              skills={["React", "TypeScript", "CSS", "Figma"]}
           href={"https://github.com/Kaveeshakavindi/Blueberi.git"}
            />
         
            </div>
            <div className="work-grid-row">
              
            <WorkCard
              title={"Dice Rolling Game"}
              description={
                "Roll the virtual dice in this Kotlin app! Challenge the computer in a thrilling game of chance, rolling five dice at a time."
              }
              imgUrl={"./images/dice.png"}
              skills={["Kotlin", "Figma"]}
           href={"https://github.com/Kaveeshakavindi/Dice_rolling_game.git"}
            />
        
            <div className="column-divider"></div>
            
            <WorkCard
              title={"Meal App"}
              description={
                "Satisfy your culinary cravings with the Meal App. This Kotlin CRUD application, powered by the MealDB API, serves up a delightful experience for food enthusiasts."
              }
              imgUrl={"./images/mealapp.png"}
              skills={["Kotlin", "MealDB API", "Figma"]}
           href={"https://github.com/Kaveeshakavindi/Meal_App.git"}
            />
         
            </div>
          </div>
        </div>
        </div>
      
    </section>
  );
};
