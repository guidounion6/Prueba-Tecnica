import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi"
import { IoMenu } from "react-icons/io5";
import { BiWorld } from "react-icons/bi"
import { PiShoppingCartBold } from "react-icons/pi"
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import "./NavBar.css"

const NavBar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const navicons = {
    color: "#5E5E5E",
    fontSize: "30px"
  }

  const naviconsmini = {
    color: "#5E5E5E",
    fontSize: "25px"
  }

  const searchiconmax = {
    color: "#BABABA",
    width: "Hug (40px)px",
    height: "Hug (40px)",
    padding: "12px 0px 0px 0px",
    gap: "12px",
    opacity: "0px",
    fontSize: "22px",
    position: "absolute",
    left: "905px",
    top: "26px"
  }

  const searchiconmin = {
    color: "#BABABA",
    width: "Hug (40px)px",
    height: "Hug (40px)",
    padding: "12px 0px 0px 0px",
    gap: "12px",
    opacity: "0px",
    fontSize: "22px",
    position: "absolute",
    left: "310px",
    top: "77px"
  }

  const worldicon = { fontSize: "22px", paddingLeft: "10px" }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const searchicon = windowWidth > 360 ? searchiconmax : searchiconmin;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setNav(false)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <div className="navbar">

      <div className="header">
        <div className="titulo">
          <h2>Mi Tienda</h2>
        </div>

        <div className="search-items">
          <div >
            <input type="search" className="searchbar" />
            <FiSearch style={searchicon} />
          </div>
          <div className="nav-items" style={{ display: windowWidth > 360 && !nav ? 'block' : 'none' }}>
            <ul className="nav-items-list">
              <li className="user"> <a href="#micuenta"><HiOutlineUserCircle style={navicons} /></a> Mi cuenta</li>
              <li> <a href="#checkout"></a><PiShoppingCartBold style={navicons} /></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="categories-container" style={{ display: windowWidth > 360 && !nav ? 'flex' : 'none' }}>
        <ul className="categories-list" style={{ display: windowWidth > 360 && !nav ? 'flex' : 'none' }}>
          <li className="categories"><a href="#muebles" className='cat-a'>Muebles</a></li>
          <li className="categories"><a href="#calzado" className='cat-a'>Calzado</a></li>
          <li className="categories"><a href="#colchones" className='cat-a'>Colchones</a></li>
          <li className="categories"><a href="#Herramientas" className='cat-a'>Herramientas</a></li>
          <li className="ofertas"><a href="#ofertas" className='cat-of'>Ofertas<BiWorld style={worldicon} /></a></li>
        </ul>
      </div>

      <div className="nav-items-mini" style={{ display: windowWidth <= 360 ? 'flex' : 'none' }}>
        <ul className="nav-items-list">
          <li className="user"> <a href="#micuenta"><HiOutlineUserCircle style={naviconsmini} /></a></li>
          <li> <a href="#checkout"></a><PiShoppingCartBold style={naviconsmini} /></li>
        </ul>
      </div>

      <div onClick={handleNav} style={{ display: windowWidth > 360 ? 'none' : 'flex' }}>
        {nav ? <AiOutlineClose className="AiOutlineClose" /> : <IoMenu className="IoMenu" />}
      </div>

      <div className={nav ? "categories-container-mini" : "categories-container-mini-none"} style={{ display: windowWidth > 360 && !nav ? 'none' : 'flex' }}>

        <div className={nav ? "mobile-menu-title" : "mobile-menu-title-none"} >
          <h3 className={nav ? "mobile-title" : "mobile-title-none"}>Mi Tienda</h3>
        </div>

        <div className={nav ? "categories-column-mini" : "categories-column-mini-none"} >
          <ul className={nav ? "categories-list-mini" : "categories-list-mini-none"}>
            <li className="categories"><a href="#muebles" className='cat-a'>Muebles</a></li>
            <hr className="line" />
            <li className="categories"><a href="#calzado" className='cat-a'>Calzado</a></li>
            <hr className="line" />
            <li className="categories"><a href="#colchones" className='cat-a'>Colchones</a></li>
            <hr className="line" />
            <li className="categories"><a href="#Herramientas" className='cat-a'>Herramientas</a></li>
            <hr className="line" />
            <li className="ofertas"><a href="#ofertas" className='cat-of'>Ofertas<BiWorld style={worldicon} /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar