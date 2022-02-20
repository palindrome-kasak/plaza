import React from 'react';
import Product from '../Components/ShopComponents/Product';
import "../styles/main.scss";
import { connect } from "react-redux";
const Shop = ({products}) => {
  return <>
    <div id="shopScreenMainContainer">
        {/* <div className="shopImageContainer">
        </div> */}
        <div className="shop-container">
        {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
                         </div>
            </div>

  </>;
};


const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};


export default connect(mapStateToProps)(Shop);
