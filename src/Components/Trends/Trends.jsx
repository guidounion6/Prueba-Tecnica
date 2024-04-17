
import React, { useEffect, useState } from 'react'
import "./Trends.css"
import { productos } from "../../productos"


const Trends = () => {

  const [cartItems, setCartItems] = useState()

  useEffect(() => {
    setCartItems(productos)
  }, [])
  return (
    <div className="Trends">
      <h2 className="trends-title">TENDENCIAS</h2>
      <div className="cards-container">
        {cartItems?.slice(1, 10).map((product) => (
          <div className="cards">
            <div key={product.id} className="">
              <img src={product.imagen} alt="img" className="product-imagen" />
              <div>
                <h2 className="producto-nombre">{product.nombre}</h2>
                <h3 className="producto-precio">${product.precio}</h3>
                <button onClick={() => { console.log("agregar al carrito") }} className="producto-comprar">Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trends