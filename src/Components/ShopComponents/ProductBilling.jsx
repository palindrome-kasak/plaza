import React from 'react';
import "../.././../styles/main.scss";
import CartProduct from '../../../components/ShopComponents/CartProduct';
import Footer from '../../../components/FixedComponents/Footer';

const Bill = () => {
    return(
        <div>
        <div className="cart">
          <div>
            {<CartProduct/>}
            {<CartProduct/>}
            </div>
            <div className="amount">
              <div>
              <div className="subTotal"><div className="paymentText">Subtotal(2 items)</div><div  className="paymentText">$15</div></div>  
              <div className="shipping"><div className="paymentText">Shipping Fee</div><div  className="paymentText">$5</div></div>
              <div><hr></hr></div>
              <div className="total"><div className="totalText">Total</div><div  className="totalText">$20</div></div>

              <div><button className="checkOut"><div className="checkText">Check Out</div></button></div>
              </div>
            </div>
          
        </div>
          <Footer/>
          </div>
    )
}


export default Bill