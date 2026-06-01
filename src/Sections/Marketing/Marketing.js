import { useState } from 'react'
import { graphicsData } from '../../data'
import { Graphics } from '../../Components/Graphics/Graphics'
import { ProjectModal } from '../../Components/ProjectModal/ProjectModal'

export const Marketing = () => {
  const [selected, setSelected] = useState(null)

  return (
<section id="testimonials" className="py-24 px-6" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto">
 
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.25em] uppercase mb-3 font-medium"
            style={{ color: 'var(--main-var-color)' }}
          >
            Creative work
          </p>
          <h2
            className="text-4xl font-light leading-tight"
            style={{ color: 'var(--true-color)' }}
          >
            Marketing & Graphics
          </h2>
          <div
            className="mt-4 h-px w-12"
            style={{ background: 'var(--stroke-color)' }}
          />
        </div>
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

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
