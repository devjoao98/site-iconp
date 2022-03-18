import React from "react";
import GlobalStyle from "./globalStyles";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//componentes
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//paginas
import Home from "./pages/HomePage/Home";
import Products from "./pages/Products/Products"
import Services from "./pages/Services/Services"
import SiginUp from "./pages/SiginUp/SiginUp"
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sigin-up" element={<SiginUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
