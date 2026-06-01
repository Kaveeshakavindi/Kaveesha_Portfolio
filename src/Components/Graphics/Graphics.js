import React from 'react'

export const Graphics = ({ image, alt, title }) => {
  return (
    <div className='group relative w-full aspect-square overflow-hidden rounded-lg cursor-pointer '>
      <img
        src={image}
        alt={alt}
        className='
          w-full h-full object-cover object-top
          grayscale
          transition-all duration-500 ease-out
          group-hover:scale-110
          group-hover:grayscale-0
        '
      />
      <div
        className='
          absolute inset-0
          bg-gradient-to-t
          from-black/50
          to-transparent
          
        '
      />
      <div
        className='
          absolute inset-0
          bg-gradient-to-t
          from-pink-600/50
          via-red-500/30
          to-transparent
          transition-opacity duration-500 ease-out
          group-hover:opacity-0
          pointer-events-none
        '
      />
      <p className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-center '>
        {title}
      </p>
    </div>
  )
}
