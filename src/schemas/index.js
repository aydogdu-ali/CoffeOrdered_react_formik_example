import * as yup from "yup"

const passwordGenerate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir eposta adresi giriniz")
    .required("Zorunlu alan"),
  age: yup
    .number()
    .positive("0'den büyük olmalıdır")
    .integer("Yaşınızı tam sayı olarak giriniz")
    .required("Zorunlu alan"),
  password: yup
    .string()
    .min(6, "En az 6 karakter olmalı")
    .matches(passwordGenerate, {
      message: "Lütfen en az 1 büyük ve küçük harf ile 1 rakam giriniz",
    })
    .required("zorunlu alan"),

  repeatPassword:yup.string().oneOf([yup.ref("password")], "Şifreler eşleşmedi").required("Zorunlu alan")
});