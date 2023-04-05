import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo_sidebar.jpg";
import { AuthContext } from "../context/AuthContextProvider";
import { logOut } from "../firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();


  // firbase çıkış methodu
  const handlelogout = () => {
    logOut(navigate);
  };
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navbarLogo">
        Size Bir <img  className="navbarImg"src={logo} alt="logo" /> Sözümüz Var!
      </div>

      <div className="links">
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/kahveler">Menu</NavLink>
        {/*ternary oparetörü kullandım kullanıcı varsa çıkışı göster yoksa girişi*/}
        {currentUser ? (
          <NavLink to="/login" onClick={handlelogout} role="button">
            Logout
          </NavLink>
        ) : (
          <NavLink to="/login"> Sign in</NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
