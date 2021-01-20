import React from 'react';

class Shoes extends React.Component {
    render() {
        return (
                <div class="container-fluid">
                    <p>Home >> Product Details</p>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="s_Product_carousel">
                                <div class="single-prd-item">
                                    <img class="img-fluid" src="assets/image/06.PNG" alt=""></img>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="single-prd-item">
                                            <img class="img-fluid w-76" src="assets/image/061.PNG" alt=""></img>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="single-prd-item">
                                            <img class="img-fluid w-50" src="assets/image/062.PNG" alt=""></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 offset-lg-1">
                            <div class="s_product_text">
                                <h3>LISHAN Women's Platform Stiletto</h3>
                                <h4>฿ 1575</h4>
                                <p>Brand: LISHAN</p> 
                                <p>Availibility : In Stock</p>
                                <p>Size : </p>
                                <p>Color : </p>
                                <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
                                    something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
                                    during the winter.</p>
                                <div class="product_count">
                                    <label for="qty">Quantity:</label>
                                    <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty"/>
                                    <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                    class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                                    <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                    class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                                </div>
                                <div class="card_area d-flex align-items-center">
                                    <a class="primary-btn" href="#">Add to Cart</a>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
        );
    }
}
export default Shoes;