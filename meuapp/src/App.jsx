import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Login from "./pages/Login"
import Sucess from "./pages/Sucess"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="sucess" element={<Sucess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App