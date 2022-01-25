import React from 'react'
import Footer from '../../../components/FixedComponents/Footer'

const ProductBilling2ndPage = () => {
    return (
        <>
        <div id="productBillingMain">
            <div id="coloums">
                <div>dot dot</div>
                <div id="row">
                    <div id="productForm">
                        <div className="inputBox">
                            <input type="text" placeholder="Full name" id="FullName"/>
                        </div>
                        <div className="inputBox">
                            <input type="email" placeholder="Email" id="email"/>
                        </div>
                        <div className="inputBox">
                            <input type="tel" placeholder="Phone number" id="phoneNumber"/>
                        </div>
                        <div className="inputBox">
                            <input type="text" placeholder="Delivery address" id="address"/>
                        </div>
                    </div>
                    <div id="buttonBox">
                        <button id="ProceedToPay">Proceed to Pay</button>
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

export default ProductBilling2ndPage
