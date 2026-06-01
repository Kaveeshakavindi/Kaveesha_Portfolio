

import React from 'react'
import './Home.css'
import { Skillset } from '../../Components/skillset/Skillset'
import meImg from '../../assets/images/me/me1.jpg'
 
export const Home = () => {
  return (
    <section id='home'>
      <div className='home-container reveal-section'>
        <div className='home-about'>
 
          {/* Circular profile image */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid var(--stroke-color)',
              boxShadow: '0 0 0 6px var(--glass-bg)',
              marginBottom: '1.5rem',
            }}
          >
            <img
              src={meImg}
              alt='Kaveesha'
              style={{ width: '100%', height: '100%', objectFit: 'cover', scale: '1.3' }}
            />
          </div>
 
          <div className='home-about-h1'>
            Hello <span className='h1-span'>my</span> name is{' '}
            <span className='h1-span'>Kaveesha.</span>
          </div>
          <div className='text-sm' style={{ color: 'var(--color-2)' }}>
            Welcome to my portfolio !
          </div>
 
          <div className='home-components-container'>
            {/* <SolidButton onClick={handleDownloadClick} /> */}
            {/* <GlassContainer /> */}
          </div>
        </div>
      </div>
    </section>
  )
}