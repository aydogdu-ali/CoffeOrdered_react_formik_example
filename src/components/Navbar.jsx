import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo_sidebar.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className="links">
        <NavLink to="/"> Anasayfa</NavLink>
        <NavLink to="/kahveler">Kahveler</NavLink>
        <NavLink to="/login"> Giriş</NavLink>
        <NavLink to="/register"> Üye Ol</NavLink>
        <NavLink to="/"> Çıkış</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
