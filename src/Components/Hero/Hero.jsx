import React from 'react'
import "./Hero.css"
import bike from "../../assets/bike.jpeg"


const Hero = () => {
  return (
    <div className="Hero">
     <img src={bike} alt="bike" />
    </div>
  )
}

export default Hero