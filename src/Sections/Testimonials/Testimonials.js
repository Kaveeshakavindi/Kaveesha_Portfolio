import React, { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sheron Kitchilan',
    role: 'Senior Data Engineer / Local Ambassador @ Teens in AI',
    avatar: 'SK',
    text: `She has a beautiful way of bringing ideas to life, making sure every visual speaks to teens in a way that feels inclusive, exciting, and real.

Every campaign needs a creative mind who can turn ideas into visuals people genuinely feel connected to, and Kaveesha does exactly that.

This was never just about making things look good.
It was about creating visuals that spark curiosity, confidence, and a sense of “I belong here.”`
  },
  {
    id: 2,
    name: 'Malsha Mihirangi',
    role: 'Marketing Manager',
    avatar: 'MM',
    text: 'Shipped our entire frontend redesign two weeks ahead of schedule. Clean code, zero hand-holding needed. Will absolutely work together again.'
  },
  {
    id: 3,
    name: 'Sanali Kaushalya',
    role: 'Country Director - Women in Tech, Sri Lanka',
    avatar: 'SK',
    text: 'Nice posts. Did not expect a design like this'
  }
]

const QuoteIcon = () => (
  <svg
    width='28'
    height='20'
    viewBox='0 0 28 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0 20V12.6C0 10.8667 0.333333 9.13333 1 7.4C1.66667 5.66667 2.6 4.1 3.8 2.7C5 1.26667 6.4 0.2 8 0L9.4 1.8C7.93333 2.46667 6.76667 3.43333 5.9 4.7C5.03333 5.93333 4.56667 7.26667 4.5 8.7H8V20H0ZM16 20V12.6C16 10.8667 16.3333 9.13333 17 7.4C17.6667 5.66667 18.6 4.1 19.8 2.7C21 1.26667 22.4 0.2 24 0L25.4 1.8C23.9333 2.46667 22.7667 3.43333 21.9 4.7C21.0333 5.93333 20.5667 7.26667 20.5 8.7H24V20H16Z'
      fill='currentColor'
    />
  </svg>
)

export default function Testimonials () {
  const [active, setActive] = useState(null)

  return (
    <section
      id='testimonials'
      className='py-24 px-6'
      style={{ background: 'var(--color-bg)' }}
    >
      <div className='max-w-5xl mx-auto'>
        {/* Header */}
        <div className='mb-16'>
          <p
            className='text-xs tracking-[0.25em] uppercase mb-3 font-medium'
            style={{ color: 'var(--main-var-color)' }}
          >
            Kind words
          </p>
          <h2
            className='text-4xl font-light leading-tight'
            style={{ color: 'var(--true-color)' }}
          >
            Testimonials
          </h2>
          <div
            className='mt-4 h-px w-12'
            style={{ background: 'var(--stroke-color)' }}
          />
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px'>
          {testimonials.map(t => (
            <div
              key={t.id}
              onMouseEnter={() => setActive(t.id)}
              onMouseLeave={() => setActive(null)}
              className='relative p-8 flex flex-col gap-6 cursor-default transition-all duration-300'
              style={{
                background:
                  active === t.id ? 'var(--glass-bg)' : 'var(--color-bg)'
              }}
            >
              {/* Quote mark */}
              <span
                className='transition-all duration-300'
                style={{
                  color:
                    active === t.id
                      ? 'var(--main-var-color)'
                      : 'var(--color-1)',
                  opacity: active === t.id ? 1 : 0.5
                }}
              >
                <QuoteIcon />
              </span>

              {/* Text */}
              <p
                className='text-sm leading-relaxed flex-1'
                style={{ color: 'var(--color-2)' }}
              >
                {t.text}
              </p>

              {/* Author */}
              <div
                className='flex items-center gap-3 pt-2'
                style={{ borderTop: '1px solid var(--stroke-color)' }}
              >
                <div
                  className='w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 tracking-wide'
                  style={{
                    background:
                      active === t.id ? 'var(--color-1)' : 'var(--glass-bg)',
                    color:
                      active === t.id ? 'var(--color-3)' : 'var(--color-2)',
                    border: '1px solid var(--stroke-color)',
                    transition: 'all 0.3s'
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    className='text-sm font-medium leading-none mb-1'
                    style={{ color: 'var(--true-color)' }}
                  >
                    {t.name}
                  </p>
                  <p className='text-xs' style={{ color: 'var(--color-2)' }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer line */}
        <div
          className='mt-px h-px w-full'
          style={{ background: 'var(--stroke-color)' }}
        />
      </div>
    </section>
  )
}
