import React, { useEffect, useState } from 'react'
import "./Hero.css"

import { imagenes } from "../../imagenes"


const Hero = () => {

  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const handleChangeImagen = (id) => {
    setImagenSeleccionada(id);
  };
  useEffect(() => {
    setImagenSeleccionada(imagenes[0].id);
  }, []);

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

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    console.log(`Botón ${index + 1} seleccionado`);
  };

  return (
    <div>
      <div className="boton-container">
        {imagenes.map((imagen) => (
          <div key={imagen.id}>
            <button
              onClick={() => handleChangeImagen(imagen.id)}
              className={`hero-button ${imagenSeleccionada === imagen.id ? 'selected' : ''}`}
            ></button>
          </div>
        ))}
      </div>

      {imagenSeleccionada !== null && (
        <img
          src={imagenes.find((imagen) => imagen.id === imagenSeleccionada).nombre}
          alt="Imagen"
        />
      )}
      <div className="button-hero-mini" style={{ display: windowWidth > 360 ? 'none' : 'flex' }}>
        <button onClick={() => handleButtonClick(0)} className={selectedButton === 0 ? 'selected' : ''}></button>
        <button onClick={() => handleButtonClick(1)} className={selectedButton === 1 ? 'selected' : ''}></button>
        <button onClick={() => handleButtonClick(2)} className={selectedButton === 2 ? 'selected' : ''}></button>
        <button onClick={() => handleButtonClick(3)} className={selectedButton === 3 ? 'selected' : ''}></button>
      </div>
    </div>
  );
};



export default Hero