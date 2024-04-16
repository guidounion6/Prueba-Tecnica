import React from 'react'
import { LuWallet } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import "./Bottom.css"


const Bottom = () => {
  return (
    <div className="bottom-container">
      <div className="bag-container">
        <IoBagOutline size={50} />
        <div className="bag-textbox">
          <p className="bag-title">ELEGÍ LOS PRODUCTOS QUE VAS A COMPRAR</p>
          <p className="bag-line">Si querés más de uno, sumalos a tu carrito.</p>
        </div>
      </div>
      <div className="wallet-container">
        <div className="wallet-textbox">
          <LuWallet size={50} />
          <p className="wallet-title">PAGÁ CON EL MEDIO DE PAGO QUE QUIERAS</p>
          <p className="wallet-line">Comprá con seguridad: usamos la tecnología de Mercado Pago.</p>
        </div>
      </div>
      <div className="truck-container">
        <div className="truck-textbox">
          <BsTruck size={50} />
          <p className="truck-title">RECIBÍ EL PRODUCTO QUE ESPERÁS</p>
          <p className="truck-line">Elegí la forma de entrega que prefieras ¡y listo! Aseguramos tu entrega con Mercado Envíos.</p>
        </div>
      </div>
    </div>
  )
}

export default Bottom