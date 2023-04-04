import React from 'react'
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { useNavigate } from 'react-router-dom';




const onSubmit = (values,actions) => {
   console.log(values) // forma yazılan değerler vardır.
   console.log(actions)// form ile ilgili yapılacak methodlar tanımlı resetleme vn. gibi
   actions.resetForm()
   console.log("tıklandı", values)
};

const Login = () => {
  const navigate= useNavigate()


  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
     
    },

    validationSchema: loginSchema,
    onSubmit
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
          placeholder="lütfen şifrenizi giriniz!"
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
       <button  onClick = {()=>navigate("/kahveler")}type="submit">
        Giriş
      </button>
      </form>
    </div>
  )
}

export default Login













  