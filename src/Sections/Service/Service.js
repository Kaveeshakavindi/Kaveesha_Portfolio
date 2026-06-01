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
    <section id="testimonials" className="py-24 px-6" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto">
 
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.25em] uppercase mb-3 font-medium"
            style={{ color: 'var(--main-var-color)' }}
          >
            What I do
          </p>
          <h2
            className="text-4xl font-light leading-tight"
            style={{ color: 'var(--true-color)' }}
          >
            Services
          </h2>
          <div
            className="mt-4 h-px w-12"
            style={{ background: 'var(--stroke-color)' }}
          />
        </div>
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
    </section>
  );
};
