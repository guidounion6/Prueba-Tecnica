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
    </div>
  );
};
  


export default Hero