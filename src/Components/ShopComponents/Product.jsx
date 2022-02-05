import React from 'react';
import "../../styles/main.scss";
import WineGlass from '../../assets/Images/wineGlass.png'
import { Link } from 'react-router-dom';

// Redux
import { connect } from "react-redux";

import {
    loadCurrentItem,
    addToCart,
  } from '../../redux/Shopping/shopping-action';


// const Product = ({ product }) => {
//     return (
//         <div className="column">
//             <div className="productImage">
//                 <img className="ProductPicture" src={product.image} alt={product.title} />
//             </div>
//             <div className="productText">
//                 <div className="Head">
//                     <div className="chronicles_head">{product.title}</div> <div className="priceTag">${product.price}</div><br></br>
//                 </div>
//                 <div>{product.description}<br></br> Trust us.</div>
//             </div>
//             <div className="button">
//                 <Link to="/productDetails" className="Buy" ><div className="buyText">Buy</div></Link>
//             </div>
//         </div>
//     )
// };

import styles from './products.module.css';


const Product = ({ product, addToCart, loadCurrentItem }) => {
    return (
      <div className={styles.product}>
        <img
          className={styles.product__image}
          src={product.image}
          alt={product.title}
        />
  
        <div className={styles.product__details}>
          <p className={styles.details__title}>{product.title}</p>
          <p className={styles.details__desc}>{product.description}</p>
          <p className={styles.details__price}>$ {product.price}</p>
        </div>
  
        <div className={styles.product__buttons}>
          <Link to={`/product/${product.id}`}>
            <button
              onClick={() => loadCurrentItem(product)}
              className={`${styles.buttons__btn} ${styles.buttons__view}`}
            >
              View Item
            </button>
          </Link>
          <button
            onClick={() => addToCart(product.id)}
            className={`${styles.buttons__btn} ${styles.buttons__add}`}
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  };

const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
      loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(Product);
  


