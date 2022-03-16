import React from "react";
import GlobalStyle from "./globalStyles";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//componentes
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//paginas
import { Home } from "./pages/HomePage/Home";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
