import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Basket extends React.Component{
    render() {
        return (
            <div class="container-fluid">
                <p>Home >> Basket</p>
                <div class="tab-content" id="pills-tabContent">
					{/* <div class="tab-pane border fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab"> */}
                        <div class="row text-center">
                            <div class="col-1"></div>
                            <div class="col-2"><h5>Product</h5></div>
                            <div class="col-3"></div>
                            <div class="col-1"><h5>Color</h5></div>
                            <div class="col-2"><h5>Price</h5></div>
                            <div class="col-1"><h5>Quantity</h5></div>
                            <div class="col-2"><h5>Total</h5></div>
                        </div>
                        <hr></hr>
                    {/* </div> */}
                </div>
                <p> </p>
                <div class="tab-content" id="pills-tabContent">
                    {/* <div class="tab-pane border fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab"> */}
                        <div class="row text-center">
                            <div class="col-1"><div class="t"><input type="checkbox" id="vehicle1" name="vehicle1"></input></div></div>
                            <div class="col-2"><h5><img class="img-fluid" src="assets/image/432.PNG" alt="" width="50%"></img></h5></div>
                            <div class="col-3"><h5><h5>PiePieBuy Women's Pointed Toe High Heels</h5></h5></div>
                            <div class="col-1"><h5><h5>Blue</h5></h5></div>
                            <div class="col-2"><h5><h5>1399</h5></h5></div>
                            <div class="col-1"><h5><h5>1</h5></h5></div>
                            <div class="col-2"><h5><h5>1399</h5></h5></div>
                        </div>
                        <hr></hr>
                    {/* </div> */}
                </div>
                <p> </p>
                <div class="tab-content" id="pills-tabContent">
                    {/* <div class="tab-pane border fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab"> */}
                        <div class="row text-center">
                            <div class="col-1"><div class="t"><input type="checkbox" id="vehicle1" name="vehicle1"></input></div></div>
                            <div class="col-2"><h5><img class="img-fluid" src="assets/image/441.PNG" alt="" width="50%"></img></h5></div>
                            <div class="col-3"><h5><h5>DREAM PAIRS Women's Kucci Classic Fashion</h5></h5></div>
                            <div class="col-1"><h5><h5>Silver</h5></h5></div>
                            <div class="col-2"><h5><h5>1746</h5></h5></div>
                            <div class="col-1"><h5><h5>1</h5></h5></div>
                            <div class="col-2"><h5><h5>1746</h5></h5></div>
                        </div>
                        <hr></hr>
                    {/* </div> */}
                </div>
                <p> </p>
                <div class="tab-content" id="pills-tabContent">
                    {/* <div class="tab-pane border fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab"> */}
                        <div class="row text-center">
                            <div class="col-1"><div class="t"><input type="checkbox" id="vehicle1" name="vehicle1"></input></div></div>
                            <div class="col-2"><h5><img class="img-fluid" src="assets/image/481.PNG" alt="" width="50%"></img></h5></div>
                            <div class="col-3"><h5><h5>Jordan Air 6 Quai 54 - Purple Mens Cz4152</h5></h5></div>
                            <div class="col-1"><h5><h5>Purple</h5></h5></div>
                            <div class="col-2"><h5><h5>13650</h5></h5></div>
                            <div class="col-1"><h5><h5>1</h5></h5></div>
                            <div class="col-2"><h5><h5>13650</h5></h5></div>
                        </div>
                        <hr></hr>
                    {/* </div> */}
                </div>
                <p> </p>
                
                <div class="row">
                    <div class="col-7">
                    </div>
                    <div class="col-4 text-center">
                        <div class="card mb-3">
                            <div class="card-body">
                                        <span>Subtotal : ฿16795</span>
                                        <h5> </h5>
                                        <span>Delivery : ฿200</span>
                                        <h5> </h5>
                                        <span>Discount : ฿2000</span>
                                    <hr></hr>
                                    <h5>Total : 14995 </h5>
                                    <h3> </h3>

                                <Link to="/payment"><button class="btn btn-secondary" type="button" id="button">Payment</button></Link>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-1">
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Basket;