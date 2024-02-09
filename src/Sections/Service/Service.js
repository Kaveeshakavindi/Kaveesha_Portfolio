import React, { useEffect, useRef } from 'react';
import "./Service.css";


const ServiceCard = ({title, description}) => {
    return (
      <div className="service-card">
        <div className="glass-text1">{title}</div>
        <div className="glass-text2">
          {description}
        </div>
      </div>
    );
  };

export const Service = () => {
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
    
    <section id="service" >
      <div className="section-container">
        <div className='service-container' ref={sectionRef}>
            <div className="sectionTitle">Services</div>
          <div className="service-cards-container">
            <ServiceCard title={'Mobile App Development'} description={"Demonstrates expertise in Mobile App Development, utilizing Android Studio, React Native, Flutter, and Xcode. Possesses advanced skills in JavaScript, TypeScript, and Dart. Gained valuable experience through a Mobile Engineering Internship at Axiata Digital Labs, contributing to the creation of effective mobile solutions."}/>

            <ServiceCard title={'Web Development'} description={"Focused on creating dynamic, responsive websites, utilizing HTML, CSS, and JavaScript. Employing React.js and Node.js for seamless front-end and back-end development. Skilled in Express.js and Spring Boot for server-side frameworks, managing SQL (MySQL) and NoSQL (MongoDB) databases."}/>

            <ServiceCard title={'Graphic Designing'} description={"Bringing creativity and precision to projects, adept in Adobe Photoshop, Illustrator, and InDesign. Proficient in digital art with Procreate. Previous roles include IT and Marketing Director at Leo Club of IIT, and Media Head at Open Hack."}/>

            <ServiceCard title={'UI/UX Designing'} description={"Demonstrating adeptness in creating compelling user experiences through UI/UX design, employing tools such as Figma and Adobe XD. Elevating digital products by materializing ideas into intuitive interfaces."}/>

            <ServiceCard title={'Database Management'} description={"Proficient in developing robust database solutions with a focus on MySQL and MongoDB, ensuring streamlined data management and seamless integration for optimal performance."}/>
           
          </div>
        </div>
      </div>
    </section>
  );
};
