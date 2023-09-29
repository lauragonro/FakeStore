import React from 'react';
import './App.css';
import Stock from "./stock";
import User from "./user";

import {Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Product from "./product";
import Cart from "./cart";

export default function App() {
  return (
    <div className="App">
    <h1 className='Title'>My Fake Store :3</h1>    
    <div className='Header'>
      <button><Link to={"/"}>Continue shopping :3</Link></button>
      <button><Link to={"/Cart"}>Cart</Link></button>
      <p><User /></p>
    </div>
    <div className='container'>
    <Routes>
      <Route path="/" element={<Stock />} />
      <Route exact path="/products/:id" element={<Product />} />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
    </div>
    <p className='Name'> Realizado por Juliana González Ronsería</p>
    </div>
  );
}


