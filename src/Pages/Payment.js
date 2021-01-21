import React from 'react';

class Payment extends React.Component {
    render() {
        return (
            <>
                <main>
                    <div class="container-fluid">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                            </div>
                        </div>
                        <p> </p>

                        <div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                            <h1>Choose a payment</h1>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-8 col-sm-8">
                                <div class="product-entry border">
                                    <div class="product-img text-center">
                                        <a class="prod-img" href="/PaymentOnDestination">
                                            <img src="assets/image/atm1.png" alt="" width="185" height="150"></img>
                                        </a>
                                    </div>
                                    <div class="product-caption text-center">
                                        <h5>Cash on Delivery</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-8 col-sm-8">
                                <div class="product-entry border">
                                    <div class="product-img text-center">
                                        <a class="prod-img" href="/debit">
                                            <img src="assets/image/atm1.png" alt="" width="185" height="150"></img>
                                        </a>
                                    </div>
                                    <div class="product-caption text-center">
                                        <h5>Debit Card</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-5 col-md-7 col-sm-10">
                                <div class="product-entry border">

                                    <div class="product-caption text-center">
                                        <h3>Order summary</h3>
                                        <p>Total (3 piece) &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ฿14995.00</p>
                                        <p>Total &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ฿14995.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </>
        );
    }
}
export default Payment;