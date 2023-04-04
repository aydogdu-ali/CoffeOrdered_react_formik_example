import * as yup from "yup"

const passwordGenerate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "En az 3  karakter olmalı")
    .required("Zorunlu alan"),
  email: yup
    .string()
    .email("Geçerli bir eposta adresi giriniz")
    .required("Zorunlu alan"),
  
  password: yup
    .string()
    .min(6, "En az 6 karakter olmalı")
    .matches(passwordGenerate, {
      message: "Lütfen en az 1 büyük ve küçük harf ile 1 rakam giriniz",
    })
    .required("zorunlu alan"),

  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmedi")
    .required("Zorunlu alan"),
});



export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir eposta adresi giriniz")
    .required("Zorunlu alan"),
  
  password: yup
    .string()
    .min(6, "En az 6 karakter olmalı")
    .required("Zorunlu alan"),
  
});