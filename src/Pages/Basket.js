import React from 'react';

class Basket extends React.Component{
    render() {
        return (
            <div class="container-fluid">
                <p>Home >> Basket</p>
                <div class="tab-content" id="pills-tabContent">
					<div class="tab-pane border fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                        <div class="row text-center">
                            <div class="col-2">Product</div>
                            <div class="col-3"></div>
                            <div class="col-2">Color</div>
                            <div class="col-2">Price</div>
                            <div class="col-1">Quantity</div>
                            <div class="col-2">Total</div>
                        </div>
                    </div>
                </div>
                <p> </p>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane border fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                        <div class="row text-center">
                            <div class="col-2"><h5><img class="img-fluid" src="assets/image/432.PNG" alt="" width="50%"></img></h5></div>
                            <div class="col-3"><h5><h5>PiePieBuy Women's Pointed Toe High Heels</h5></h5></div>
                            <div class="col-2"><h5><h5>Blue</h5></h5></div>
                            <div class="col-2"><h5><h5>1399</h5></h5></div>
                            <div class="col-1"><h5><input type="text" id="quantity" name="quantity" value="1"/></h5></div>
                            <div class="col-2"><h5><h5>1399</h5></h5></div>
                        </div>
                    </div>
                </div>
                <p> </p>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane border fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                        <div class="row text-center">
                            <div class="col-2"><h5><img class="img-fluid" src="assets/image/441.PNG" alt="" width="50%"></img></h5></div>
                            <div class="col-3"><h5><h5>DREAM PAIRS Women's Kucci Classic Fashion</h5></h5></div>
                            <div class="col-2"><h5><h5>Silver</h5></h5></div>
                            <div class="col-2"><h5><h5>1746</h5></h5></div>
                            <div class="col-1"><h5><input type="text" id="quantity" name="quantity" value="1"/></h5></div>
                            <div class="col-2"><h5><h5>1746</h5></h5></div>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane border fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                        <div class="row text-center">
                            <div class="col-2"><h5><img class="img-fluid" src="assets/image/481.PNG" alt="" width="50%"></img></h5></div>
                            <div class="col-3"><h5><h5>Jordan Air 6 Quai 54 - Purple Mens Cz4152</h5></h5></div>
                            <div class="col-2"><h5><h5></h5>Purple</h5></div>
                            <div class="col-2"><h5><h5>13650</h5></h5></div>
                            <div class="col-1"><h5><input type="text" id="quantity" name="quantity" value="1"/></h5></div>
                            <div class="col-2"><h5><h5>13650</h5></h5></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Basket;