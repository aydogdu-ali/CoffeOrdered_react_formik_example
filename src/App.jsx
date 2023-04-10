

import "./App.css"

import AuthContextProvider from "./context/AuthContextProvider";
import AppRouter from "./router/AppRouter";

import BasketContextProvider from "./context/BasketContextProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BasketContextProvider>
          <AppRouter />
          <ToastContainer />
        </BasketContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
