import React from 'react';
import Footer from '../Components/fixedComponents/Footer';
import Product from '../Components/ShopComponents/Product';

import Banner from '../Components/fixedComponents/Banner'


const Home = () => {
  return <div>
  <Banner/>
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
