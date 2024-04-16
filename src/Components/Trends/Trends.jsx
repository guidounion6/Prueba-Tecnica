import React from 'react'
import "./Trends.css"
import Cards from '../Card/Cards'





const Trends = () => {
  return (
    <div className="Trends">
      <p className="trends-title">TENDENCIAS</p>
      <div className="cards-container">
        <Cards />
      </div>
    </div>
  )
}

export default Trends