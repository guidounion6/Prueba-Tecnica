import React, { useEffect, useState } from 'react'
import "./Categories.css"


const Categories = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="categories-box">
      <div className="group1250">
        <h2 className="cat-title">VISITÁ LAS CATEGORIAS MÁS POPULARES</h2>
        <div className="cat-container" style={{ display: windowWidth > 360 ? 'flex' : 'none' }}>
          <div className="zapatillas">
            <h3>ZAPATILLAS</h3>
          </div>
          <div className="futbol">
            <h3>FÚTBOL</h3>
          </div>
          <div className="calzas">
            <h3>CALZAS</h3>
          </div>
          <div className="pelotas">
            <h3>PELOTAS</h3>
          </div>
        </div>

        <div className="cat-container-mini" style={{ display: windowWidth < 360 ? 'flex' : 'none' }}>
          <div className="zapatillas">
            <h3>ZAPATILLAS</h3>
          </div>
        </div>


      </div>
    </div>

  )
}

export default Categories