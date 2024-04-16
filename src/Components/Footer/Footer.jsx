import React from 'react'
import "./Footer.css"
import vtex from "../../assets/vtexlogo.png"
import afip from "../../assets/data fiscal.jpeg"
import { MdOutlineEarbuds } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {

  const logoStyle = {
    color: "white",
    width: "60px",
    height: "30px",
    paddingTop: "10px",
    paddingLeft: "15px",
  }

  const pierceLogo = {
    width: "30px",
    height: "25px",
    paddingTop: "12px",
    paddingLeft: "10px",
  }

  const locationLogo = {
    width: "48px",
    height: "28px",
    position: "absolute",
    left: "1125px"
  }

  const logoAfip = {
    width: "29.46px",
    height: "37.15px",
    
  }

  return (
    <div className="footer-container">
      <div className="footer-left">
        <div>
          <ul className="footer-list">
            <li>CONDICIONES</li>
            <li>TRABAJA CON NOSOTROS</li>
            <li>MEDIOS DE PAGO</li>
            <li>PREGUNTAS FRECUENTES</li>
          </ul>
        </div>
        <div className="button-discourage">
          <button>BOTÓN DE ARREPENTIMIENTO</button>
        </div>
        <div className="text-container">
          <p className="text-powered">Powered by Pierce Commerce</p>
          <MdOutlineEarbuds style={pierceLogo} />
          <p className="text-pierce">Pierce</p>
          <img src={vtex} alt={vtex} style={logoStyle} />
        </div>
      </div>
      <div className="footer-tienda">
        <p>Mi Tienda</p></div>
      <div className="footer-right">
        <div>
          <IoLocationOutline style={locationLogo} /><p className="sucursales">SUCURSALES</p>
          <span> Whatsapp 2215137270
            <br />
            ecommerce@mateu.com.ar
            <br />
            La Plata 1900, Buenos Aires, Argentina
          </span>
        </div>
        <div className="sign">
          <p>© 2023 MateuSports</p>
          <img src={afip} alt={afip} style={logoAfip} />
        </div>
      </div>
    </div>
  )
}

export default Footer