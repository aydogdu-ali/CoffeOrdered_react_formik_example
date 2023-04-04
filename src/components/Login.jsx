import React, { useContext, useEffect } from 'react'
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { useNavigate } from 'react-router-dom';
import { UserLogin } from '../firebase/auth';
import AuthContextProvider, { AuthContext } from '../context/AuthContextProvider';






const Login = () => {

 const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      navigate("/kahveler");
      // toastSuccessNotify("Login Performed");
    }
  }, [currentUser]);




  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
     
    },

    validationSchema: loginSchema,
  onSubmit : (values,actions) => {
   UserLogin(values.email, values.password)
    navigate("/kahveler");
   actions.resetForm()
   console.log("tıklandı", values)
}
  });


  return (
    <div>
      <form className="register" onSubmit={handleSubmit}>
        <h1>Lütfen giriş bilgilerini doldurunuz</h1>
        <div className="form-input">
          <label> Email</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            autoComplete="off"
            placeholder="lütfen mail adresinizi giriniz!"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-input">
          <label> Şifre</label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            autoComplete="off"
            placeholder="lütfen şifrenizi giriniz!"
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button onSubmit={handleSubmit}  type="submit"
      >
          Giriş
        </button>
      </form>
    </div>
  );
}

export default Login













  