import React, { useEffect, useRef } from 'react';
import "./Blog.css";
import { useInView } from "react-intersection-observer";
import { MdOutlineArrowOutward } from "react-icons/md";


export const Blog = () => {
  const BlogCard = () => {
    return (
      <a href="https://medium.com/@kaveesha.20210431/building-a-restful-task-manager-api-with-node-express-and-mongodb-in-4-steps-e55d33f33d4f" className="blog-anchor-tag">
        <div className="blog-card-container">
          <div className="blog-card-img-container">
            <img
              src="images/restful.png"
              alt="blog"
              className="blog-card-img"
            />
          </div>
          <div className="blog-card-text">
            <div className="blog-card-year">2024</div>
            <div className="blog-card-title">
              Building a RESTful Task Manager API with Node, Express and MongoDB
              in 4 steps
            </div>
            <MdOutlineArrowOutward className="blog-card-arrow" />
          </div>
        </div>
      </a>
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
    <section id="blog">
      <div className="section-container">
        <div className="blog-container" ref={sectionRef}>
          <div className="sectionTitle">Writing</div>

          <BlogCard />
        </div>
      </div>
    </section>
  );
};
