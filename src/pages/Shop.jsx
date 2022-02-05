// import React from 'react';
// import Product from '../Components/ShopComponents/Product';

// // Redux
// import { connect } from "react-redux";


// const Shop = ({ products }) => {
//   return (
//     <div>
//       {products.map((product) => (
//         <Product key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     products: state.shop.products,
//   };
// };

// export default connect(mapStateToProps)(Shop);


import React from "react";
// import styles from "./products.module.css";
 import Product from '../Components/ShopComponents/Product';

// Redux
import { connect } from "react-redux";


const Shop = ({ products }) => {
  return (
    <div >
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Shop);
