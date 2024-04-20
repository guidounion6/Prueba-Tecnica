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

      <div className="button-hero-mini" style={{ display: windowWidth > 360  ? 'none' : 'flex' }}>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};
  


export default Hero