import React from 'react'
import './Blog.css'
import { useInView } from "react-intersection-observer";

export const Blog = () => {

    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5, // Adjust this threshold as needed
    });

  return (
    <section id="blog" ref={ref}>
      <div className="section-container">
        <div className={`blog-container ${inView ? "visible" : ""}`}>
            <div className="sectionTitle">Blog</div>
          
        </div>
      </div>
    </section>
  )
}
