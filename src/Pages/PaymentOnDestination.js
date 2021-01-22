import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class PaymentOnDestination extends React.Component {
    render() {
        return (
            <>
                <main>
                    <div class="container-fluid">
                        <div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                            <h1>Thank you for your order</h1>
                            <h5>Order number 0123456789012345 your</h5>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="product-entry border">

                            <div class="product-caption text-center">
                                <p>Pro prepare the balance to be ready in the temple</p>
                                <h3>฿14995.00</h3>
                            </div>

                            <div class="container-fluid">
                                <div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                                    <h5>Your Delivery Date</h5>
                                </div>
                                <div class="col-sm-12 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-md-8 col-sm-8">
                                            <div class="product-entry border">
                                                <div class="product-img text-center border">
                                                    <a class="prod-img" >
                                                        <img src="assets/image/432.png" alt="" width="185" height="150"></img>
                                                    </a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                            Est.19 Jan-22 Jan
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-3 col-md-8 col-sm-8">
                                            <div class="product-entry border">
                                                <div class="product-img text-center border">
                                                    <a class="prod-img" >
                                                        <img src="assets/image/441.png" alt="" width="185" height="150"></img>
                                                    </a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                            Est.19 Jan-22 Jan
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-3 col-md-8 col-sm-8">
                                            <div class="product-entry border">
                                                <div class="product-img text-center border">
                                                    <a class="prod-img" >
                                                        <img src="assets/image/481.png" alt="" width="185" height="150"></img>
                                                    </a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                            Est.19 Jan-22 Jan
                                            </div>
                                            </div>
                                        </div>

                                    </div><br></br>
                                    <div class="col-sm-5 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                                        <h4>Order summary &emsp;&emsp; ฿14995.00</h4>
                                    </div>

                                </div>
                                <div class="product-caption text-center">
                                    <Link to="/payment"><button class="btn-v" type="button" id="button">Back to Payment</button></Link>&nbsp;&nbsp;
                                    <Link to="/homepage"><button class="btn-v" type="button" id="button">Shop</button></Link>
                                </div>
                                <br></br>
                            </div>


                        </div>
                    </div>
                </main>
            </>
        );
    }
}
export default PaymentOnDestination;