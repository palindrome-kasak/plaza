import React from 'react'
import SuccessIcon from '../../assets/Images/SuccessIcon.png';
import Footer from '../../Components/fixedComponents/Footer';
;


const OrderConfirm = () => {
    return (
        <>
        <div id="orderConfirmMain">

            <div>dot dot</div>
            <div id="OrderCenterContainer">
                <div id="OrderConfirmText">
                    Order Confirmed
                </div>
                <div id="SuccessIconContainer">
                    <img src={SuccessIcon} alt="SuccessIcon" />
                </div>
                <div id="successfulText">
                    Your order has been successfully confirmed.
                </div>
            </div>

        </div>
        <div>
            <Footer/>
        </div>
        </>
    )
}

export default OrderConfirm
