// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { toastSuccessNotify, toastify } from "../components/Toastify";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBToAt1CZA0Y0k-jya2YahEHBoq8839HqI",
  authDomain: "furmik-yup.firebaseapp.com",
  projectId: "furmik-yup",
  storageBucket: "furmik-yup.appspot.com",
  messagingSenderId: "111746744203",
  appId: "1:111746744203:web:3cc4cdaf71a23b38aaf98e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// kullanıcı oluşturmak için kullanılan yöntem
export const createUser = async (email, password, displayName, navigate) => {
  try {
    let user = await createUserWithEmailAndPassword(auth, email, password);
    //kullanıcı kayıt olur olmaz profilni ismini güncelleme methodu (register sayfasında parametre olarak gönderiliyor.)
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    console.log(user);
    navigate("/kahveler");
    // Toastify("Successfully create user");
  } catch (error) {
    console.log(error.message);
  }
};

// var olan kullanıcının giriş yapması için kullanılan yöntem.
//navigate'i parametre olarak login componentinden aldık.
// başarılı giriş olursa kahveler sayfasına yönlendirecek.
export const UserLogin = async (email, password, navigate) => {
  try {
    let uselogin = await signInWithEmailAndPassword(auth, email, password);
    console.log(uselogin);
    navigate("/kahveler");
   toastify("Success");
  } catch (error) {
    
  toastSuccessNotify("Not Login");
    
   
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName } = user;
      setCurrentUser({ email, displayName });
    } else {
      /*çıkış yaptığında displayname  gözükmeyecek*/
      setCurrentUser(false);
      console.log("kullanıcı çıkış yaptı");
    }
  });
};

// kullanıcı çıkış yaptığında kullanılacak yöntem
// kullanıcıyı navigate ile sign in sayfasına yönlendirdik.
export const logOut = (navigate) => {
  try {
    signOut(auth);
    navigate("/login")
    } catch (error) {
    console.log(error);
  }
};
