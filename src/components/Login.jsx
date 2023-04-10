import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { useNavigate, Link } from "react-router-dom";
import { UserLogin } from "../firebase/auth";
import { AuthContext } from "../context/AuthContextProvider"

const Login = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  // formikten kullanacağım methodları tanımlıyoruz.
  const { values, errors, handleChange, handleSubmit, touched, handleBlur } =
    useFormik({
      initialValues: {
        // başlangıç statelerini tanımlıyoruz
        email: "",
        password: "",
      },

      // yup da tanımladıgımız özellikleri import ediyoruz
      validationSchema: loginSchema,
      // formu gönderdiğimde olacak aksiyonları tanımlıyoruz.
      onSubmit: (values, actions) => {
        // burada kayıtlı kullanıcı login oluyor
        UserLogin(values.email, values.password, navigate);
        // formudaki bilgiler resetleniyor.
        actions.resetForm();
        console.log("tıklandı", values);
      },
    });

  return (
    <div>
      <form className="register" onSubmit={handleSubmit}>
        <h3>Please Fill in The Form </h3>
        <div className="form-input">
          <label> Email</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            autoComplete="off"
            placeholder="Enter email address please!"
            onBlur={handleBlur}
            // inputa girildiğinde hata varsa gösterecek
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>
        <div className="form-input">
          <label> Şifre</label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            autoComplete="off"
            placeholder="Enter password please!"
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>
        <Link className="regBtn" to="/register">
          Click for Membership
        </Link>

        <button onSubmit={handleSubmit} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
