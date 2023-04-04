import { useFormik } from "formik";
import React from "react";
import { registerSchema } from "../schemas";
import { useNavigate } from "react-router-dom";
import { createUser } from "../firebase/auth";

// const onSubmit = (values, actions) => {
 
//   console.log(values); // forma yazılan değerler vardır.
//   console.log(actions); // form ile ilgili yapılacak methodlar tanımlı resetleme vn. gibi
//   const displayName = username;
//   createUser(email, password, displayName);

//   actions.resetForm();
//   console.log("tıklandı", values);
// };

const Register = () => {
   
   const navigate = useNavigate();
 
  // formik yapısının içinde kullanacağımız yapılaıı çıkartarak kullanabiliriz.
  // const formik = useFormik({
  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
      },

      validationSchema: registerSchema,
      // onSubmit: ()=>{
      //   // navigate("/kahveler",{replace:true, email:values.email, password: values.password})
      //    navigate("/kahveler")
      // }


       onSubmit:  (values, actions) => {
 
  console.log(values); // forma yazılan değerler vardır.
  console.log(actions); // form ile ilgili yapılacak methodlar tanımlı resetleme vn. gibi
  const displayName = username;
  createUser(values.email, values.password, values.displayName, navigate);
   
  actions.resetForm();
  console.log("tıklandı", values);
}

   
    });

  return (
    <form className="register" onSubmit={handleSubmit}>
      <h1>Lütfen formu eksizsiz doldurunuz</h1>
      <div className="form-input">
        <label>Kullanıcı Adı</label>
        <input
          type="text"
          value={values.username}
          onChange={handleChange}
          id="username"
          placeholder="lütfen kullanıcı adı giriniz!"
          className={errors.username ? "input-error" : ""}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
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

      <div className="form-input">
        <label> Şifrenizi Tekrar Giriniz</label>
        <input
          type="password"
          value={values.repeatPassword}
          onChange={handleChange}
          id="repeatPassword"
          placeholder="lütfen şifrenizi tekrar giriniz!"
          className={errors.repeatPassword ? "input-error" : ""}
        />
        {errors.repeatPassword && (
          <p className="error">{errors.repeatPassword}</p>
        )}
      </div>
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default Register;
