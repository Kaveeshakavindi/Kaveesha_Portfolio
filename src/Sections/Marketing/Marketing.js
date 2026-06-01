import { useState } from 'react'
import { graphicsData } from '../../data'
import { Graphics } from '../../Components/Graphics/Graphics'
import { ProjectModal } from '../../Components/ProjectModal/ProjectModal'

export const Marketing = () => {
  const [selected, setSelected] = useState(null)

  return (
    <section id='projects'>
      <div className='section-container'>
        <div className='projects-container reveal-section'>
          <div className='sectionTitle'>Marketing & Graphic Designing</div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {graphicsData.map((graphic, index) => (
              <div
                key={index}
                onClick={() => setSelected(graphic)}
                className='cursor-pointer'
              >
                <Graphics
                  image={graphic.images[0].url}
                  alt={graphic.images[0].alt}
                  title={graphic.project}
                />
                {/* show image count badge if multiple */}
                {graphic.images.length > 1 && (
                  <p className='text-xs text-center text-neutral-400 mt-1'>
                    +{graphic.images.length - 1} more
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
