import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo_sidebar.jpg";
import { AuthContext } from "../context/AuthContextProvider";
import { logOut } from "../firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();

  const handlelogout = () => {
    logOut(navigate);
  };
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navbarLogo">
        Size Bir <img src={logo} alt="logo" /> Sözümüz Var!
      </div>

      <div className="links">
        <NavLink to="/"> Anasayfa</NavLink>
        <NavLink to="/kahveler">Kahvelerimiz</NavLink>
        {currentUser ? (
          <NavLink to="/login" onClick={handlelogout} role="button">
            Çıkış
          </NavLink>
        ) : (
          <NavLink to="/login"> Giriş</NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
