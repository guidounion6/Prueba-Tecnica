import React, { useEffect, useState } from 'react'
import { LuWallet } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import "./Bottom.css"


const Bottom = () => {

  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    const elementsToToggle = document.querySelectorAll('.bag-container-mini, .wallet-container-mini, .truck-container-mini');
    elementsToToggle.forEach((element, i) => {
      element.style.display = windowWidth > 360 ? 'none' : i === index ? 'block' : 'none';
    });
  };

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
    <div className="bottom-container">
      <div className="bag-container" style={{ display: windowWidth <= 360 ? 'none' : 'block' }}>
        <IoBagOutline size={50} />
        <div className="bag-textbox">
          <p className="bag-title">ELEGÍ LOS PRODUCTOS QUE VAS A COMPRAR</p>
          <p className="bag-line">Si querés más de uno, sumalos a tu carrito.</p>
        </div>
      </div>
      <div className="wallet-container" style={{ display: windowWidth <= 360 ? 'none' : 'block' }}>
        <div className="wallet-textbox">
          <LuWallet size={50} />
          <p className="wallet-title">PAGÁ CON EL MEDIO DE PAGO QUE QUIERAS</p>
          <p className="wallet-line">Comprá con seguridad: usamos la tecnología de Mercado Pago.</p>
        </div>
      </div>
      <div className="truck-container" style={{ display: windowWidth <= 360 ? 'none' : 'block' }}>
        <div className="truck-textbox">
          <BsTruck size={50} />
          <p className="truck-title">RECIBÍ EL PRODUCTO QUE ESPERÁS</p>
          <p className="truck-line">Elegí la forma de entrega que prefieras ¡y listo! Aseguramos tu entrega con Mercado Envíos.</p>
        </div>
      </div>

      <div className="bag-container-mini" style={{ display: windowWidth < 360 ? 'block' : 'none' }} id="1">
        <IoBagOutline size={50} />
        <div className="bag-textbox">
          <p className="bag-title">ELEGÍ LOS PRODUCTOS QUE VAS A COMPRAR</p>
          <p className="bag-line">Si querés más de uno, sumalos a tu carrito.</p>
        </div>
      </div>
      <div className="wallet-container-mini" style={{ display: 'none' }} id="2">
        <div className="wallet-textbox">
          <LuWallet size={50} />
          <p className="wallet-title">PAGÁ CON EL MEDIO DE PAGO QUE QUIERAS</p>
          <p className="wallet-line">Comprá con seguridad: usamos la tecnología de Mercado Pago.</p>
        </div>
      </div>
      <div className="truck-container-mini" style={{ display: 'none' }} id="3">
        <div className="truck-textbox">
          <BsTruck size={50} />
          <p className="truck-title">RECIBÍ EL PRODUCTO QUE ESPERÁS</p>
          <p className="truck-line">Elegí la forma de entrega que prefieras ¡y listo! Aseguramos tu entrega con Mercado Envíos.</p>
        </div>
      </div>

      <div className="button-bottom-mini" style={{ display: windowWidth > 360 ? 'none' : 'flex' }}>
        <button onClick={() => handleButtonClick(0)} className={selectedButton === 0 ? 'selected' : ''}></button>
        <button onClick={() => handleButtonClick(1)} className={selectedButton === 1 ? 'selected' : ''}></button>
        <button onClick={() => handleButtonClick(2)} className={selectedButton === 2 ? 'selected' : ''}></button>
      </div>
    </div>
  )
}

export default Bottom