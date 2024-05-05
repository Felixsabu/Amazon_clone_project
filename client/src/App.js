import './App.css';
import React, { Component } from 'react';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_signin/Sign_in';
import Signup from './components/signup_signin/Signup';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbaar />
      <Newnav />


     
        <Routes>
          <Route exact path='/' element={<Maincomp />} />
          <Route path='/login' element={<Sign_in />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/getproductsone/:id' element={<Cart />} />
          <Route path='/buynow' element={<Buynow />} />
        </Routes>
      

      <Footer />
    </>
  );
}

export default App;

