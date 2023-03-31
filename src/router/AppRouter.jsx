import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../components/Home';
import Register from '../components/Register';
import Login from '../components/Login';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter