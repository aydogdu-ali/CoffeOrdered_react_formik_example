import { useFormik } from "formik";
import React from "react";

const Register = () => {
  // formik yapısının içinde kullanacağımız yapılaıı çıkartarak kullanabiliriz.
  // const formik = useFormik({
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      repeatPassword: "",
    },
  });

  console.log(values);

  return (
   
      <form className="register">
        <div className="form-input">
          <label> Email</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="lütfen mail adresinizi giriniz!"
          />
        </div>
        <div className="form-input">
          <label> Yaş</label>
          <input
            type="number"
            value={values.age}
            onChange={handleChange}
            id="age"
            placeholder="lütfen yaşınızı  giriniz!"
          />
        </div>
        <div className="form-input">
          <label> Şifre</label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="lütfen şifrenizi giriniz!"
          />
        </div>
        <div className="form-input">
          <label> Şifrenizi Tekrar Giriniz</label>
          <input
            type="password"
            value={values.repeatPassword}
            onChange={handleChange}
            id="repeatPassword"
            placeholder="lütfen şifrenizi tekrar giriniz!"
          />
        </div>
        <button>Kaydet</button>
      </form>
   
  );
};

export default Register;
