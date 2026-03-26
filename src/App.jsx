import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './assets/components/NavBar';

import About from "./assets/pages/About";
import Services from "./assets/pages/Services";
import Product from "./assets/pages/Product";
import Work from "./assets/pages/Work";
import Pricing from "./assets/pages/Pricing";
import Contact from "./assets/pages/Contact";
import Home from './assets/pages/Home';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Product />} />
        <Route path="/our-work" element={<Work />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

  );
}