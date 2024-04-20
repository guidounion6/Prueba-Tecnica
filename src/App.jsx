import React, { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Trends from './Components/Trends/Trends'
import Popular from './Components/Popular/Popular'
import Footer from './Components/Footer/Footer'
import Categories from './Components/Categories/Categories'
import Bottom from './Components/Bottom/Bottom'


const App = () => {
   
  return (
    <div>
      <NavBar />
      <Hero/>
      <Trends/>
      <Categories/>
      <Popular/>
      <Bottom/>
      <Footer/>
      
    </div>
  )
}

export default App