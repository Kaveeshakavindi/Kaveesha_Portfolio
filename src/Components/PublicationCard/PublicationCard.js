import React from 'react'

export default function PublicationCard ({ title, description }) {
  return (
    <div className='w-full'>
      <div
        className='
        group
        flex flex-col border-1 
        h-full
        w-full
        p-4
        rounded-lg
        border border-white/40
        bg-white/10
        shadow-sm
      '
      >
        <h3
          className='
          text-l
          font-semibold
          text-white          mb-3
          line-clamp-2
        '
        >
          {title}
        </h3>

        <p
          className='
          text-white/50
          leading-relaxed
          flex-grow
          text-sm
        '
        >
          {description}
        </p>
      </div>
    </div>
  )
}
