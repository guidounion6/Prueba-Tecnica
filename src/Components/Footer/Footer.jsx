import React, { useEffect, useState } from 'react'
import "./Footer.css"
import vtex from "../../assets/vtexlogo.png"
import afip from "../../assets/data fiscal.jpeg"
import { MdOutlineEarbuds } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {

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

  const logoStyle = {
    color: "white",
    width: "60px",
    height: "30px",
    paddingTop: "5px",
    paddingLeft: "15px",
  }

  const pierceLogo = {
    width: "30px",
    height: "25px",
    paddingTop: "9px",
    paddingLeft: "10px",
  }

  const locationLogo = {
    width: "48px",
    height: "28px",
    position: "relative",
    right: "18px",
    top: "48px"
  }

  const logoAfip = {
    width: "29.46px",
    height: "37.15px",

  }


  return (
    <div className="footer-container">
      <div className="footer-left" style={{ display: windowWidth > 360 ? 'block' : 'none' }} >
        <div>
          <ul className="footer-list">
            <li>CONDICIONES</li>
            <li>TRABAJA CON NOSOTROS</li>
            <li>MEDIOS DE PAGO</li>
            <li>PREGUNTAS FRECUENTES</li>
          </ul>
        </div>
        <div className="button-discourage" style={{ display: windowWidth > 360 ? 'block' : 'none' }}>
          <button>BOTÓN DE ARREPENTIMIENTO</button>
        </div>
        <div className="text-container" style={{ display: windowWidth > 360 ? 'flex' : 'none' }}>
          <p className="text-powered">Powered by Pierce Commerce</p>
          <MdOutlineEarbuds style={pierceLogo} />
          <p className="text-pierce">Pierce</p>
          <img src={vtex} alt={vtex} style={logoStyle} />
        </div>
      </div>
      <div className="footer-tienda" style={{ display: windowWidth > 360 ? 'block' : 'none' }}>
        <p>Mi Tienda</p>
      </div>
      <div className="footer-right">
        <div style={{ display: windowWidth > 360 ? 'block' : 'none' }}>
          <IoLocationOutline style={locationLogo} /><p className="sucursales">SUCURSALES</p>
          <span><a href="#whatsapp" className="cat-w">Whatsapp 2215137270</a>
            <br />
            ecommerce@mateu.com.ar
            <br />
            La Plata 1900, Buenos Aires, Argentina
          </span>
        </div>
        <div className="sign" style={{ display: windowWidth > 360 ? 'flex' : 'none' }}>
          <p>© 2023 MateuSports</p>
          <img src={afip} alt={afip} style={logoAfip} />
        </div>
      </div>

      <div className="footer-tienda" style={{ display: windowWidth <= 360 ? 'block' : 'none' }}>
        <p>Mi Tienda</p>
      </div>

      <div style={{ display: windowWidth <= 360 ? 'block' : 'none' }}>
        <ul className="footer-list">
          <li>CONDICIONES</li>
          <li>TRABAJA CON NOSOTROS</li>
          <li>MEDIOS DE PAGO</li>
          <li>PREGUNTAS FRECUENTES</li>
        </ul>
      </div>

      <div className="button-discourage" style={{ display: windowWidth <= 360 ? 'block' : 'none' }}>
        <button>BOTÓN DE ARREPENTIMIENTO</button>
      </div>

      <div className="sucursales-mini" style={{ display: windowWidth <= 360 ? 'block' : 'none' }}>
        <IoLocationOutline style={locationLogo} /><p className="sucursales">SUCURSALES</p>
      </div>

      <div className="contacto" style={{ display: windowWidth <= 360 ? 'flex' : 'none' }}>
       <h3><a href="#whatsapp" className="cat-w">Whatsapp 2215137270</a></h3> 
          <h4 className="email">ecommerce@mateu.com.ar</h4>
          <h4 className="direccion">La Plata 1900, Buenos Aires, Argentina</h4>
      </div>


      <div className="text-container" style={{ display: windowWidth <= 360 ? 'flex' : 'none' }}>
        <p className="text-powered">Powered by Pierce Commerce</p>
        <MdOutlineEarbuds style={pierceLogo} />
        <p className="text-pierce">Pierce</p>
      </div>

      <div className="sign" style={{ display: windowWidth <= 360 ? 'flex' : 'none' }}>
        <p>© 2023 MateuSports</p>
      </div>

      <div style={{ display: windowWidth <= 360 ? 'inline' : 'none' }}>
        <img src={afip} alt={afip} style={logoAfip} />
        <img src={vtex} alt={vtex} style={logoStyle} />
      </div>




    </div>
  )
}


export default Footer