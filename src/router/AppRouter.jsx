import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kahveler" element={<PrivateRouter />}>
          <Route path="" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
