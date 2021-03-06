/* eslint-disable no-unused-vars */
import "./App.css";
import React,{useState} from 'react'
// import NavBar from '../src/Components/NavBar'
import NavBar from "../src/Components/fixedComponents/NavigationBar";
import { Route, Routes,Navigate } from "react-router-dom";
import Home from "../src/pages/Home";
import Shop from "../src/pages/Shop";
import Footer from "../src/Components/fixedComponents/Footer";
import Product from "../src/Components/ShopComponents/Product";
import ProductDetails from '../src/pages/ProductDetails';
import { connect } from "react-redux";
import Cart from "../src/pages/MyCartPage";

import MyAccount from '../src/pages/MyProfilePages/MyAccount'
import Login from "./pages/Login";

import {firebase} from './firebase/firebase'

function App({current}) {
 
  const [IsUserSignedIn, setIsUserSignedIn ] = useState(true);
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    return setIsUserSignedIn(true);
  }
  setIsUserSignedIn(false);
})

 if(IsUserSignedIn === true){
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<MyAccount/>} />
        <Route path="/productDetails/:id" element={!current ? <Navigate to="/" /> : <ProductDetails/>} />
      </Routes>
    </div>
  );
 }
 else{
  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Login />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<MyAccount/>} />
        <Route path="/productDetails/:id" element={!current ? <Navigate to="/" /> : <ProductDetails/>} /> */}
      </Routes>
     
      
    </div>
  );
}}
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);

