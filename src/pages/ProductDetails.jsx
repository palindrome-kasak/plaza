import React from 'react'
import ProductPicture from '../assets/Images/wineGlass.png'
import { Save, Share } from '../Components/SvgComponents/svgs';
import NextVector from '../assets/Images/NextVector.png';
import Footer from '../Components/fixedComponents/Footer';

const ProductDetails = () => {
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
                            <div id="PlazaProductHeading">Plaza Chronicles</div>
                            <div id="PlazaProductHeading">$15</div>
                        </div>
                        <div id="ProductLightText">Wanna be cool? Get this. Trust us.</div>
                    </div>
                    <div id="incrementBox">
                        increement and decreement
                    </div>
                    <div id="AddCartButtonBox">
                        <button id="AddToCartButton">Add to Cart</button>
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
                            Product description, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             In tempor nibh et metus porttitor, vel molestie felis laoreet. Ut ac nisi et metus tempus ornare.
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

export default ProductDetails
