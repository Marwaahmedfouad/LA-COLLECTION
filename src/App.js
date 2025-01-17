import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';
import { jwtDecode } from 'jwt-decode';
import Contact from './components/Contact';
import { Provider } from 'react-redux';
import store from './redux/store/store';


function App() {
  let obj = {
    a:"a",
    outer : function (){
      console.log(this);
         this.inner =() => {
            console.log(this);
        }
    }
}
console.log(obj.outer)
console.log(navigator.userAgent)

  const [userData, setUserData]=useState(null);
  function saveUserData() {
    let encodedToken=localStorage.getItem('userToken');
    let decodedToken=jwtDecode(encodedToken);
    setUserData(decodedToken)
  }
  return (
    <Provider store={store}>
      <Navbar userData={userData} setUserData={setUserData}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUserData={setUserData}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={<Login />} />
      </Routes>
    </Provider>
  );
}

export default App;
