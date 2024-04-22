
import React, { useEffect, useState } from 'react'
import "./Trends.css"
import { productos } from "../../productos"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Trends = () => {

  const [cartItems, setCartItems] = useState()

  useEffect(() => {
    setCartItems(productos)
  }, [])

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

  const backStyle = {
    width: "50px",
    height: "25px",
    position: "relative",
    left: "-16px",
    top: "1px"
  }

  const nextStyle = {
    width: "50px",
    height: "25px",
    position: "relative",
    right: "11px",
    top: "1px",
  }

  return (
    <div className="Trends">
      <h2 className="trends-title">TENDENCIAS</h2>
      <div className="cards-container">
        {cartItems?.slice(1, 10).map((product) => (
          <div key={product.id} className="cards">
            <div>
              <img src={product.imagen} alt="img" className="producto-imagen" />
              <div>
                <h2 className="producto-nombre">{product.nombre}</h2>
                <h3 className="producto-precio">${product.precio}</h3>
                <button onClick={() => { console.log("agregar al carrito") }} className="producto-comprar">Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="button-prev" style={{ display: windowWidth > 360 ? 'block' : 'none' }}><IoIosArrowBack style={backStyle} /></button>
      <button className="button-next" style={{ display: windowWidth > 360 ? 'block' : 'none' }}><IoIosArrowForward style={nextStyle} /></button>

      <div className="button-trends-mini" style={{ display: windowWidth > 360 ? 'none' : 'flex' }}>
        <button onClick={() => handleButtonClick(0)} className={selectedButton === 0 ? 'selected' : ''}></button>
        <button onClick={() => handleButtonClick(1)} className={selectedButton === 1 ? 'selected' : ''}></button>
        <button onClick={() => handleButtonClick(2)} className={selectedButton === 2 ? 'selected' : ''}></button>
        <button onClick={() => handleButtonClick(3)} className={selectedButton === 3 ? 'selected' : ''}></button>
      </div>
    </div>

  )
}

export default Trends