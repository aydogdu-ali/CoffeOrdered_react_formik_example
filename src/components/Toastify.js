
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const toastify = (mesaj) => {
toast.success(mesaj, {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
});


}



export const toastSuccessNotify = (mesaj) => {
  toast.error(mesaj, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
