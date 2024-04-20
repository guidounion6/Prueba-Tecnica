import React, { useEffect, useState } from 'react'
import "./Popular.css"
import { productos } from "../../productos"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Popular = () => {
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
    <div className="popular-container">
      <h2 className="popular-title">LAS MAS VENDIDAS</h2>
      <div className="cards-container">
        {cartItems?.slice(1, 10).map((product) => (
          <div key={product.id} className="cards">
            <div  className="">
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
      <button className="button-prev-pop" style={{ display: windowWidth > 360  ? 'block' : 'none' }}><IoIosArrowBack style={backStyle} /></button>
      <button className="button-next-pop" style={{ display: windowWidth > 360  ? 'block' : 'none' }}><IoIosArrowForward style={nextStyle}/></button>
    </div>
  )
}

export default Popular