/* eslint-disable no-unused-vars */
import React from 'react'
import ProductPicture from '../assets/Images/wineGlass.png'
import { Save, Share } from '../Components/SvgComponents/svgs';
import NextVector from '../assets/Images/NextVector.png';
import Footer from '../Components/fixedComponents/Footer';
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../Redux/Shopping/Actions";
const ProductDetails = ({ current, addToCart }) => {
    return (
        <> 
        <div id="mainBox">
            <div id="rowBox">
                <div id="productImage">
                    <div id="largeProductimage">
                        <div>
                            <img id="NextVector" src={NextVector} alt="img" />
                        </div>
                        <div>
                            <img id="ProductDetailPicture" src={ProductPicture} alt="img" />
                        </div>
                        <div>
                            <img id="NextVector" src={NextVector} alt="img" />
                        </div>

                    </div>
                    <div id="saveAndShareBox">
                        <div id="ProductSaveIcon">
                            <Save />
                        </div>
                        <div id="ProductShareIcon">
                            <Share />
                        </div>
                    </div>
                    <div id="smallImageMainBox" >
                        <div id="smallImageBox">
                            <img id="SmallProductPicture" src={ProductPicture} alt="img" />
                        </div>
                        <div id="smallImageBox">
                            <img id="SmallProductPicture" src={ProductPicture} alt="img" />
                        </div>
                        <div id="smallImageBox">
                            <img id="SmallProductPicture" src={ProductPicture} alt="img" />
                        </div>
                        <div id="smallImageBox">
                            <img id="SmallProductPicture" src={ProductPicture} alt="img" />
                        </div>
                        <div id="smallImageBox">
                            <img id="SmallProductPicture" src={ProductPicture} alt="img" />
                        </div>
                    </div>
                </div>
                <div id="productDetail">
                    <div id="productText">
                        <div id="row">
                            <div id="PlazaProductHeading">{current.title}</div>
                            <div id="PlazaProductHeading">{current.price}</div>
                        </div>
                        <div id="ProductLightText">Wanna be cool? Get this. Trust us.</div>
                    </div>
                    <div id="incrementBox">
                        increement and decreement
                    </div>
                    <div id="AddCartButtonBox">
                        <button id="AddToCartButton" onClick={() => addToCart(current.id)}>Add to Cart</button>
                    </div>
                    <div id="PincodeInputBox">
                        <input type="text" placeholder="Pincode" id="pincodeInput" inputmode="numeric" maxlength="6" />
                    </div>
                    <div>
                        <div id="productDetailHeading">
                            <div>Description</div>
                            <div>Delivery</div>
                            <div>Payment & Security</div>
                        </div>
                        <div id="productDiscription">
                        {current.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      current: state.shop.currentItem,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);




