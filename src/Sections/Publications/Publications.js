import React from 'react'
import { publicationsData } from '../../data'
import PublicationCard from '../../Components/PublicationCard/PublicationCard'

export default function Publications () {
  return (
    <section id='projects'>
      <div className='section-container'>
        <div className='projects-container reveal-section'>
          <div className='sectionTitle'>Publications</div>
          <div className='flex items-center gap-2 mb-3'>
            <span className='px-2 py-1 text-xs rounded-full bg-pink-100 text-pink-700'>
              Conference Paper
            </span>

            <span className='text-sm text-gray-500'>2025</span>
          </div>
          {publicationsData.map((pub, index) => (
            <PublicationCard title={pub.title} description={pub.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
