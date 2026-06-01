import React from 'react'
import { publicationsData } from '../../data'
import PublicationCard from '../../Components/PublicationCard/PublicationCard'

export default function Publications () {
  return (
    <section id="testimonials" className="py-24 px-6" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.25em] uppercase mb-3 font-medium"
            style={{ color: 'var(--main-var-color)' }}
          >
            Research
          </p>
          <h2
            className="text-4xl font-light leading-tight"
            style={{ color: 'var(--true-color)' }}
          >
            Publications
          </h2>
          <div
            className="mt-4 h-px w-12"
            style={{ background: 'var(--stroke-color)' }}
          />
        </div>

        {/* Tag + Year row */}
        <div className='flex items-center gap-2 mb-3'>
          <span
            className='px-2 py-1 text-xs rounded-full font-medium'
            style={{
              background: 'var(--glass-bg)',
              color: 'var(--color-3)',
              border: '1px solid var(--stroke-color)',
            }}
          >
            Conference Paper
          </span>
          <span
            className='text-sm'
            style={{ color: 'var(--color-2)' }}
          >
            2026
          </span>
        </div>

        {/* Publication cards */}
        {publicationsData.map((pub, index) => (
          <PublicationCard
            key={index}
            title={pub.title}
            description={pub.description}
          />
        ))}

      </div>
    </section>
  )
}