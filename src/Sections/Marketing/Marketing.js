import { useState } from 'react'
import { graphicsData } from '../../data'
import { Graphics } from '../../Components/Graphics/Graphics'
import { ProjectModal } from '../../Components/ProjectModal/ProjectModal'
import art1 from '../../assets/images/Graphics/hobby/1.png'
import art2 from '../../assets/images/Graphics/hobby/2.png'
import art3 from '../../assets/images/Graphics/hobby/3.png'
import art4 from '../../assets/images/Graphics/hobby/4.png'
import art5 from '../../assets/images/Graphics/hobby/5.png'
import art6 from '../../assets/images/Graphics/hobby/6.png'

const images = [art1, art2, art3, art4, art5, art6]

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
            Graphic Designing
          </h2>
          <div
            className="mt-4 h-px w-12"
            style={{ background: 'var(--stroke-color)' }}
          />
        </div>
        <div className='text-white/70 py-4'>Art Gallery</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>

          {images.map((img) => (
 <img
        src={img}
        alt="art"
        className='
          w-full h-full object-cover object-top
          transition-all duration-500 ease-out
          group-hover:scale-110
          group-hover:grayscale-0
        '
      />
          ))}
           
        </div>
        <div className='text-white/70 py-4'>Marketing Contributions</div>
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
