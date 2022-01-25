import React from 'react'
import Footer from '../../../components/FixedComponents/Footer'

const ProductBillingPayment = () => {
    return (
        <>
            <div id="productBillingMain">
                <div id="coloums">
                    <div>dot dot</div>
                    <div id="row">
                        <div id="productpaymentMethods">
                            <div id="methodTextHeading">
                                Select Method of Payment
                            </div>
                            <div id="methodBox">
                                <div className="methodSelectionRow">
                                    <div className="cardText">Credit Card</div>
                                    <div> <input type="checkbox" className="checkbox"/></div>
                                </div>
                                <div><hr /></div>
                                <div className="methodSelectionRow">
                                    <div className="cardText">Debit Card</div>
                                    <div>
                                        <input type="checkbox" className="checkbox"/>
                                    </div>
                                </div>
                                <div><hr /></div>
                                <div className="methodSelectionRow">
                                    <div className="cardText">Paytm/UPI</div>
                                    <div> <input type="checkbox" className="checkbox"/></div>
                                </div>
                                <div><hr /></div>
                                <div id="methodSelectionLastRow">
                                    <div className="cardText">Cash on dilivery</div>
                                    <div> <input type="checkbox" className="checkbox"/></div>
                                </div>
                            </div>
                        </div>
                        <div id="buttonBox">
                            <button id="ProceedToPay">Check out</button>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default ProductBillingPayment
