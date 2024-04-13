import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="navbar">

      <div className="header">
        <div className="titulo">
          <p>Mi Tienda</p>
        </div>

        <div className="search-items">
          <div >
            <input type="search" className="searchbar" />
          </div>
          <div className="nav-items" >
            <ul className="nav-items-list">
              <li>Mi cuenta</li>
              <li>Carrito</li>
            </ul>
          </div>
        </div>
      </div>



      <div >
        <ul className="categories-list">
          <li className=""><a href="#muebles">Muebles</a></li>
          <li className="categories"><a href="#calzado">Calzado</a></li>
          <li className="categories"><a href="#colchones">Colchones</a></li>
          <li className="categories"><a href="#Herramientas">Herramientas</a></li>
          <li className="categories"><a href="#ofertas">Ofertas</a></li>
        </ul>
      </div>


    </div>
  )
}

export default NavBar