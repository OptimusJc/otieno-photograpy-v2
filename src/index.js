import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page imports
import App from "./App";
import PotraitMen from "./containers/potraits/PotraitMen";
import PotraitWomen from "./containers/potraits/PotraitWomen";
import Food from "./containers/food/Food";
import Architecture from "./containers/architecture/Architecture";
import About from "./containers/about/About";
import Contact from "./containers/contact/Contact";
import LandingPage from "./containers/landingpage/LandingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<App />}>
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="architecture" element={<Architecture />} />
        <Route path="potrait">
          <Route path="men" element={<PotraitMen />} />
          <Route path="women" element={<PotraitWomen />} />
        </Route>
        <Route path="food" element={<Food />} />
        <Route path="entry" element={<LandingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
