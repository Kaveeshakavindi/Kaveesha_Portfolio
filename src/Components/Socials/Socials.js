import React from 'react'
import './Socials.css'
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import ProgressBar from '../ProgressBar/ProgressBar';

export const Socials = () => {
  return (
    <div className='socials-contents-container'>
      <div className='contents-container'>
        
      <img src='/images/portfolio1.jpeg' className='contents-image'/>
      <div className='contents-text'>Contents:</div>
      <ProgressBar/>
    </div>

    <div className="vertical-navbar">
      <a href="#home"><SlSocialGithub /></a>
      <a href="#about"><SlSocialLinkedin /></a>
      <a href="#services"><SlSocialInstagram /></a>
      <a href="#contact"><SlSocialFacebook /></a>
    </div>
    
    </div>
  )
}
