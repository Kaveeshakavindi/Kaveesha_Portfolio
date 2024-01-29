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
  
  return (
    
    <section id="service">
      <div className="section-container">
        <div className='service-container'>
            <div className="sectionTitle">Services</div>
          <div className="service-cards-container">
            <ServiceCard title={'Mobile App Development'} description={"I specialize in Mobile App Development, leveraging my expertise in Android Studio, React Native, Flutter, and Xcode. Proficient in JavaScript, TypeScript, and Dart, I bring a diverse skill set to crafting innovative and user-friendly mobile applications. As a Mobile Engineering Intern at Axiata Digital Labs, I've honed my skills in creating seamless and impactful solutions in the dynamic field of mobile development."}/>

            <ServiceCard title={'Web Development'} description={"Specializing in crafting dynamic and responsive websites, I utilize HTML, CSS, and JavaScript. Leveraging frameworks like React.js and Node.js (JavaScript/TypeScript), I ensure seamless front-end and back-end development. Proficient in server-side frameworks like Express.js (Node.js) and Spring Boot (Java), I excel in managing SQL databases such as MySQL and NoSQL databases like MongoDB."}/>

            <ServiceCard title={'Graphic Designing'} description={"As a seasoned graphic designer, I bring creativity and precision to every project, leveraging my expertise in Adobe Photoshop, Illustrator, and InDesign. With a flair for digital art using Procreate, I seamlessly blend my past roles as an IT and Marketing Director for Leo Club of IIT and Media Head for Open Hack, ensuring a unique and strategic approach to visual communication."}/>

            <ServiceCard title={'UI/UX Designing'} description={"I specialize in crafting seamless and visually engaging user experiences through UI/UX design. Proficient in tools like Figma and Adobe XD, I bring ideas to life with intuitive interfaces and interactive prototypes that elevate digital products."}/>

            <ServiceCard title={'Database Management'} description={"I excel in crafting robust database solutions using MySQL and MongoDB, ensuring efficient data management and seamless integration."}/>
           
          </div>
        </div>
      </div>
    </section>
  );
};
