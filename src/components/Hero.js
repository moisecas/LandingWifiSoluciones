import React from 'react'
import "./Hero.css";  // Import CSS file for this component from src/components/Hero.css

const Hero = ({imageSrc}) => {
  return (
    <div className='hero'>
        <img src={imageSrc} alt='hero' className='hero_image'/> 
        <h1 className='hero_title'> Soluciones TI </h1>
    
    </div>
  )
}

export default Hero