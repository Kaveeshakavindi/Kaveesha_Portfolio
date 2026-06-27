import React, { useState, useEffect } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Sections/Home/Home'
import { Blog } from './Sections/Blog/Blog'
import { Service } from './Sections/Service/Service'
import CustomCursor from './Components/CustomCursor/CustomCursor'
import Footer from './Components/Footer/Footer'
import LandingPage from './Components/LandingPage/LandingPage'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Projects } from './Sections/Projects/Projects'
import { Marketing } from './Sections/Marketing/Marketing'
import Publications from './Sections/Publications/Publications'
import { Timeline } from './Sections/Timeline/Timeline'
import Testimonials from './Sections/Testimonials/Testimonials'
gsap.registerPlugin(ScrollTrigger)
function App () {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      gsap.registerPlugin(ScrollTrigger) 

      const sections = document.querySelectorAll('.reveal-section')

      sections.forEach(section => {
        gsap.fromTo(
          section,
          {
            y: 100,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })
    }
  }, [isLoading])

  return (
    <div className='App'>
      {isLoading ? (
        <LandingPage />
      ) : (
      <div>
        <CustomCursor />
        <div className='custom-cursor'></div>
        <Navbar className='navbar' />
        {/* <Socials className="app-socials"/> */}
        <div className='home-bg'>
          <Home />
        </div>
        <Timeline />
        <Service />
        <Publications />
        <Projects />
        <Marketing />
        {/* <Testimonials /> */}
        <Footer />
      </div>
    )}
    </div>
  )
}

export default App
