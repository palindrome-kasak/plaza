import React from 'react';
import Footer from '../Components/fixedComponents/Footer';
import Product from '../Components/ShopComponents/Product';

import Banner from '../Components/fixedComponents/Banner'
import TrendingSectionContainer from '../Components/ShopComponents/TrendingSectionContainer';


const Home = () => {
  return <div>
  <Banner/>
      <TrendingSectionContainer/>
      <Footer/>
  </div>;
};

export default Home;
