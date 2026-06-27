import React, { useEffect, useState } from 'react'
import './projects.css'
import { projectsData } from '../../data'
import { ProjectCard } from '../../Components/ProjectCard'

export const Projects = () => {

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
        <div className=''>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id} project={project}
            />
          ))}

        </div>
      </div>
    </section>
  )
}
