import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BackgroundChanger from "./components/BackgroundChanger";
import Counter from "./components/Counter";
import ImageCarousel from "./components/ImageCarousel";
import Navbar from "./components/Navbar";
import QuoteGenerator from "./components/QuoteGenerator";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/background" element={<BackgroundChanger />} />
        <Route path="/image" element={<ImageCarousel />} />
        <Route path="/quote" element={<QuoteGenerator />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
