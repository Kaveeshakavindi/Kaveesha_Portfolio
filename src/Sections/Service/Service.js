import React from "react";
import "./Service.css";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({title, description}) => {
    return (
      <div className="service-card">
        <div className="service-title">{title}</div>
        <div className="service-description">
          {description}
        </div>
      </div>
    );
  };

export const Service = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this threshold as needed
  });
  return (
    
    <section id="service" ref={ref}>
      <div className="section-container">
        <div className={`service-container ${inView ? "visible" : ""}`}>
            <div className="sectionTitle">Services</div>
          <div className="service-cards-container">
            <ServiceCard title={'web designing'} description={'web designing is a massive thing'}/>
            <ServiceCard title={'web designing'} description={'web designing is a massive thing'}/>
            <ServiceCard title={'web designing'} description={'web designing is a massive thing'}/>
            <ServiceCard title={'web designing'} description={'web designing is a massive thing'}/>
            <ServiceCard title={'web designing'} description={'web designing is a massive thing'}/>
            <ServiceCard title={'web designing'} description={'web designing is a massive thing'}/>
          </div>
        </div>
      </div>
    </section>
  );
};
