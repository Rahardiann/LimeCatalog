import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.js';
import About from './pages/about/about.js';
import Products from './pages/product/product.js';
import View from './pages/barang/barang.js';
import Detail from './pages/detailproduk/detail.js';
import Contact from './pages/contact/contact.js';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/aboutus"  element={<About/>} />
          <Route path="/product"  element={<Products/>} />
          <Route path="/product/view"  element={<View/>} />
          <Route path="/product/view/detail"  element={<Detail/>} />
          <Route path="/contact"  element={<Contact/>} />

      </Routes>
    </Router>
  );
}

export default App;
