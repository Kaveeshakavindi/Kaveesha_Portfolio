import React from 'react'

export default function PublicationCard ({ title, description }) {
  return (
    <div className='w-full mb-4'>
      <div
        className='group flex flex-col h-full w-full p-4 rounded-lg'
        style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--stroke-color)',
        }}
      >
        <h3
          className='text-l font-semibold mb-3 line-clamp-2'
          style={{ color: 'var(--true-color)' }}
        >
          {title}
        </h3>
        <p
          className='leading-relaxed flex-grow text-sm'
          style={{ color: 'var(--color-2)' }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}