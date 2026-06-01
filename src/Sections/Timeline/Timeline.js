import { useState } from 'react'
import { timelineData } from '../../data'

export const Timeline = () => {
  const [active, setActive] = useState(null)

  return (
    <section id="testimonials" className="py-24 px-6" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-[0.25em] uppercase mb-3 font-medium"
            style={{ color: 'var(--main-var-color)' }}>
            Background
          </p>
          <h2 className="text-4xl font-light leading-tight"
            style={{ color: 'var(--true-color)' }}>
            Experience & Education
          </h2>
          <div className="mt-4 h-px w-12" style={{ background: 'var(--stroke-color)' }} />
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px"
            style={{ background: 'var(--line-color, rgba(255,174,228,0.18))' }} />

          <div className="flex flex-col gap-0">
            {timelineData.map((item, i) => (
              <div key={i}
                className="relative pl-10 pb-10 cursor-pointer group"
                onClick={() => setActive(active === i ? null : i)}>

                {/* dot */}
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-110"
                  style={{
                    background: 'var(--color-1)',
                    border: `1.5px solid ${active === i ? 'var(--stroke-color)' : 'transparent'}`
                  }}>
                  <span className="text-white text-xs font-bold">
                    {item.type === 'work' ? 'W' : item.type === 'Volunteer & Leadership' ? 'V' : 'E'}
                  </span>
                </div>

                {/* card */}
                <div className="rounded-xl p-4 transition-all duration-200"
                  style={{
                    background: active === i
                      ? 'var(--card-bg-active, rgba(255,255,255,0.09))'
                      : 'var(--card-bg, rgba(255,255,255,0.04))',
                    border: `0.5px solid ${active === i
                      ? 'var(--card-border-active, var(--stroke-color))'
                      : 'var(--card-border, rgba(255,174,228,0.12))'}`
                  }}>

                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <p className="text-sm mb-0.5" style={{ color: 'var(--meta-color, rgba(255,255,255,0.38))' }}>
                        {item.year}
                      </p>
                      <p className="font-semibold" style={{ color: 'var(--true-color)' }}>
                        {item.role}
                      </p>
                      <p className="text-sm" style={{ color: 'var(--color-2)' }}>
                        {item.company}
                      </p>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full capitalize"
                      style={{
                        background: 'var(--badge-bg, rgba(255,174,228,0.12))',
                        color: 'var(--badge-color, var(--color-3))'
                      }}>
                      {item.type}
                    </span>
                  </div>

                  {active === i && (
                    <p className="mt-3 text-sm leading-relaxed pt-3"
                      style={{
                        color: 'var(--color-2)',
                        borderTop: '0.5px solid var(--desc-border, rgba(255,174,228,0.14))'
                      }}>
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}