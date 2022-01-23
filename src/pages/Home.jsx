import React from 'react';
import Footer from '../Components/fixedComponents/Footer';
import Product from '../Components/ShopComponents/Product';




const Home = () => {
  return <div>
       <div>{<Product />}</div>
      <div>{<Product />}</div>
      <div>{<Product />}</div>
      <div>{<Product />}</div>
      <div>{<Product />}</div>
      <div>{<Product />}</div>
      <Footer/>
  </div>;
};

export default Home;
