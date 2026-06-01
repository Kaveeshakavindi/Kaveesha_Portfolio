import { useState, useEffect } from 'react'

export const ProjectModal = ({ project, onClose }) => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const handleKey = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight')
        setActive(i => Math.min(i + 1, project.images.length - 1))
      if (e.key === 'ArrowLeft') setActive(i => Math.max(i - 1, 0))
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <div
      className='fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4'
      onClick={onClose}
    >
      <div
        className='relative bg-neutral-900 rounded-xl max-w-3xl w-full max-h-[70vh] flex flex-col overflow-hidden'
        onClick={e => e.stopPropagation()}
      >
        {/* header */}
        <div className='flex items-center justify-between px-5 py-3 border-b border-white/10'>
          <div>
            <p className='text-white font-medium text-sm'>{project.project}</p>
            <p className='text-white/50 text-xs mt-0.5'>
              {active + 1} / {project.images.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className='text-white/60 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10'
            aria-label='Close'
          >
            ✕
          </button>
        </div>

        {/* main image */}
        <div className='flex-1 flex items-center justify-center bg-black overflow-hidden min-h-0'>
          <img
            key={active}
            src={project.images[active].url}
            alt={project.images[active].alt}
            className='max-h-[60vh] max-w-full object-contain'
          />
        </div>

        {/* thumbnail strip — only shown when >1 image */}
        {project.images.length > 1 && (
          <div className='flex gap-2 p-3 overflow-x-auto border-t border-white/10'>
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`
                  flex-shrink-0 w-14 h-14 rounded-md overflow-hidden border-2 transition-all
                  ${
                    i === active
                      ? 'border-pink-500 opacity-100'
                      : 'border-transparent opacity-50 hover:opacity-80'
                  }
                `}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className='w-full h-full object-cover object-top'
                />
              </button>
            ))}
          </div>
        )}

        {/* prev / next arrows — only shown when >1 image */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={() => setActive(i => Math.max(i - 1, 0))}
              disabled={active === 0}
              className='absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 disabled:opacity-20 text-white rounded-full w-9 h-9 flex items-center justify-center transition-all'
              aria-label='Previous image'
            >
              ‹
            </button>
            <button
              onClick={() =>
                setActive(i => Math.min(i + 1, project.images.length - 1))
              }
              disabled={active === project.images.length - 1}
              className='absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 disabled:opacity-20 text-white rounded-full w-9 h-9 flex items-center justify-center transition-all'
              aria-label='Next image'
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  )
}
