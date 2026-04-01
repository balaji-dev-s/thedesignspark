import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { initClickSpark } from "./assets/components/ClickSpark.js";
// import { initThunderClick } from "./assets/components/thunderClick.js";
// import { useEffect } from "react";

import NavBar from './assets/components/NavBar';

import About from "./assets/pages/About";
import Services from "./assets/pages/Services";
import Product from "./assets/pages/Product";
import Work from "./assets/pages/Work";
import Pricing from "./assets/pages/Pricing";
import Contact from "./assets/pages/Contact";
import Home from './assets/pages/Home';
// import CursorTrail from './assets/components/CursorTrail.jsx';
// import ThunderBurst from './assets/components/ThunderBurst.jsx';
import CircleFillTrail from './assets/components/CircleFillTrail.jsx';

export default function App() {

  // useEffect(() => {
  //   const cleanup = initClickSpark();

  //   return () => {
  //     cleanup && cleanup();
  //   };
  // }, []);

  // useEffect(() => {
  //   const cleanup = initThunderClick();
  //   return () => cleanup && cleanup();
  // }, []);

  return (
    <>
      {/* <CursorTrail /> */}
      <CircleFillTrail />
      {/* <ThunderBurst /> */}
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