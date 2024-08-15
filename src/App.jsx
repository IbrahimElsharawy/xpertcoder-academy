import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Diplomas from "./components/Diplomas/Diplomas";
import AboutUs from "./components/AboutUs/AboutUs";
import Employment from "./components/Employment/Employment";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/diplomas" element={<Diplomas />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
