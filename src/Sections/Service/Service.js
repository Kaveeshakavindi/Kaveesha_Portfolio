import React from "react";
import "./Service.css";
import { services } from "../../data";


const ServiceCard = ({ title, description, num ,img}) => {
  return (
    <div className="service-card">
      <div className="service-id">{num}</div>
      <div className="service-title">{title}</div>
      <div className="service-description">{description}</div>
      <div className="service-img-container">
       <img src={img} className="service-img"/>
       </div>
    </div>
  );
};

export const Service = () => {

  return (
    <section id="service">
      <div className="section-container">
        <div className="service-container reveal-section">
          <div className="sectionTitle">Services</div>
          <div className="service-cards-container">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                num={service.id}
                title={service.title}
                description={service.description}
                img={service.img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
