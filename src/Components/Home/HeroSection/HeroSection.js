import React from 'react'
import  "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className='HeroSection'>
        <div className="overlay"></div>
        <video src="Hero.mp4" autoPlay loop muted />
        <div className="content">
            {/* <h1>Welcome</h1>
            <h2>TO</h2>
            <h1>IDA</h1> */}
         
        </div>
    </div>
  )
}

export default HeroSection;