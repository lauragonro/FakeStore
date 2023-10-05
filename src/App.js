import React from 'react';
import './App.css';
import Stock from "./stock";
import User from "./user";

import {Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Product from "./product";
import Cart from "./cart";

import Categories from "./categories";
import Category from "./category"

export default function App() {
  return (
    <div className="App">
      <header>
        <h1 className='Title'>My Fake Store :3</h1>    
        <div className='Header'>
          <div className='Categories'>
            <h3>Filter by categories: </h3>
            <p><Categories /></p>
          </div>
          <button><Link to={"/"}>Continue shopping :3</Link></button>
          <button><Link to={"/Cart"}>Cart</Link></button>
          <p><User /></p>
        </div>
      </header>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Stock />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/category/:category" element={<Category />} />
          <Route exact path="/category/:category/products/:id" element={<Product />} />
        </Routes>
      </div>
      <footer>
        <p className='Name'> Realizado por Juliana González Ronsería</p>
      </footer>
    </div>
  );
}
