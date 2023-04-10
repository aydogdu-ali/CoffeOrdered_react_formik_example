import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo_sidebar.jpg";
import { AuthContext } from "../context/AuthContextProvider";
import { logOut } from "../firebase/auth";
import Modal from "./Modal";
import { BasketContext } from "../context/BasketContextProvider";
import sepet from "../assets/sepet.svg"
import { toastify } from "./Toastify";


<assets />;

const Navbar = () => {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  const {basket} = useContext(BasketContext)
 
  // firbase çıkış methodu
  const handlelogout = () => {
    logOut(navigate);
    toastify("Bye");
  };

  return (
    <div className="navbar">
      <div className="navbarLogo">
        Size Bir <img className="navbarImg" src={logo} alt="logo" /> Sözümüz
        Var!
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
     

       
        {currentUser && (
          <div
            style={{
              backgroundImage: `url(${sepet})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: 50,
              width: 50,
            }}
            className="siparisBtn"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#edit-modal"
          >
            <span className="count">{basket.cart.length} </span>{" "}
          </div>
        )}

        <Modal />
      </div>
    </div>
  );
};

export default Navbar;
