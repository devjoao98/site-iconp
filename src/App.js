import React from "react";
import GlobalStyle from "./globalStyles";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//componentes
import Navbar from "./components/Navbar/Navbar";

//paginas
import { Home } from "./pages/HomePage/Home";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Servicos" element={<Home />} />
        <Route path="/Produtos" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
