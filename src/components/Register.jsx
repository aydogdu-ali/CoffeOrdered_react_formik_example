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
  const { values, errors, handleChange, handleSubmit, handleBlur,touched, isSubmitting } =
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
      <h3> Please Fill out the Form Completely</h3>
      <div className="form-input">
        <label>Username</label>
        <input
          type="text"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          id="username"
          placeholder="Enter username please!"
          className={errors.username && touched.username ? "input-error" : ""}
        />
        {errors.username && touched.username && (
          <p className="error">{errors.username}</p>
        )}
      </div>
      <div className="form-input">
        <label> Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          placeholder="Enter email address please!"
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
      </div>

      <div className="form-input">
        <label> Password</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          placeholder="Enter password please!"
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
      </div>

      <div className="form-input">
        <label> Enter Your Password Again </label>
        <input
          type="password"
          value={values.repeatPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          id="repeatPassword"
          placeholder="Enter password again, please!"
          className={
            errors.repeatPassword && touched.repeatPassword ? "input-error" : ""
          }
        />
        {errors.repeatPassword && touched.repeatPassword && (
          <p className="error">{errors.repeatPassword}</p>
        )}
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default Register;
