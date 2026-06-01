import { useState } from 'react'
import { timelineData } from '../../data'

const dot = {
  work: 'bg-pink-500',
  education: 'bg-violet-500'
}

const badge = {
  work: 'bg-pink-100 text-pink-700',
  education: 'bg-violet-100 text-violet-700'
}

export const Timeline = () => {
  const [active, setActive] = useState(null)

  return (
    <section className='max-w-2xl mx-auto py-16 px-4'>
      <h2 className='text-2xl font-semibold text-neutral-800 mb-10'>
        Experience
      </h2>

      <div className='relative'>
        {/* vertical line */}
        <div className='absolute left-3 top-0 bottom-0 w-px bg-neutral-200' />

        <div className='flex flex-col gap-0'>
          {timelineData.map((item, i) => (
            <div
              key={i}
              className='relative pl-10 pb-10 cursor-pointer group'
              onClick={() => setActive(active === i ? null : i)}
            >
              {/* dot */}
              <div
                className={`
                  absolute left-0 top-1 w-7 h-7 rounded-full border-2 border-white
                  flex items-center justify-center shadow-sm
                  transition-transform duration-200 group-hover:scale-110
                  ${dot[item.type]}
                `}
              >
                <span className='text-white text-xs font-bold'>
                  {item.type === 'work' ? 'W' : 'E'}
                </span>
              </div>

              {/* card */}
              <div
                className={`
                  rounded-xl border transition-all duration-200
                  ${
                    active === i
                      ? 'border-neutral-300 bg-white shadow-md'
                      : 'border-transparent bg-neutral-50 hover:border-neutral-200 hover:bg-white'
                  }
                  p-4
                `}
              >
                <div className='flex items-start justify-between gap-3 flex-wrap'>
                  <div>
                    <p className='text-sm text-neutral-400 mb-0.5'>
                      {item.year}
                    </p>
                    <p className='font-semibold text-neutral-800'>
                      {item.role}
                    </p>
                    <p className='text-sm text-neutral-500'>{item.company}</p>
                  </div>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${
                      badge[item.type]
                    }`}
                  >
                    {item.type}
                  </span>
                </div>

                {/* expanded description */}
                {active === i && (
                  <p className='mt-3 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3'>
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
