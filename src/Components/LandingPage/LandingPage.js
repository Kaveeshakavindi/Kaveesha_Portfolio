import React from 'react'
import './LandingPage.css'
import logo from '../../assets/images/logo/klogo.gif'

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className='loading-gif'>
        <img src={logo}/>
      </div>
    </div>
  )
}

export default LandingPage