import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo_sidebar.jpg"

const Navbar = () => {
  return (
    <navbar className="navbar">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className='links'>
        <NavLink to="/"> Anasayfa</NavLink>
        <NavLink to="/login"> Giriş</NavLink>
        <NavLink to="/"> Çıkış</NavLink>
        <NavLink to="/register"> Üye Ol</NavLink>
      </div>
    </navbar>
  );
}

export default Navbar