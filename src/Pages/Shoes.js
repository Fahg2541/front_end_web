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
                                <p>Size : &nbsp;  
                                    <select name="Size" id="Size">
                                        <option value="36">36</option>
                                        <option value="37">37</option>
                                        <option value="38">38</option>
                                        <option value="39">39</option>
                                        <option value="40">40</option>
                                        <option value="41">41</option>
                                        <option value="42">42</option>
                                    </select> </p>
                                <p>Color : &nbsp;  
                                    <select name="Color" id="color">
                                        <option value="Beige">Beige</option>
                                        <option value="Black">Black</option>
                                    </select> </p>
                                <p>
                                    These shoes look cheaply made the beige/tan colored sole and also on the 
                                    bottom of the shoe, is not appealing and looks odd w the black shoe. (not a terrible con, just my opinion). 
                                    Lastly they are pretty difficult to latch on and buckle. The big strap is a bit too thick to get thru the 
                                    buckle part, it was quite annoying and it took me longer than normal to get them on.
                                </p>
                                <div class="col-lg-4">
                                    <div class="input-group ">
                                        {/* <span class="input-group-btn">
                                            <button type="button" class="quantity-left-minus btn"  data-type="minus" data-field="">
                                            <i class="icon-minus2"></i>
                                            </button>
                                        </span> */}
                                        <input type="text" id="quantity" name="quantity" class="form-control  border border-dark input-number" value="1" min="1" max="100"/>
                                        
                                    </div>
                                </div>
                                
                                <br></br>
                                    <div class="row">
	                  	                <div class="col-sm-3 text-center">
                                            <button class="btn-v">Add to Cart</button>
								        </div>
							        </div>
                                    <br></br>
                            </div>
                        </div>    
                    </div>
                    <div class="tab-content" id="pills-tabContent">
					    <div class="tab-pane border fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                            <p><h7>Product Details</h7></p>
                            <ul class="list">
                                <li> Platform open toe ankle strap stiletto sandals feature 5.9" high slim heel with 1.18"platform, sexy and comfortable for walking.</li>
                                <li>This sexy criss cross platform sandal bring you taller look, more confidence and more compliments, following the trend front. a wonderful wending party club dress couture sandals.</li>
                                <li>Platform stiletto single band ankle strap sandals is the most wished & gift Ideas for wife, daughter, friend.</li>
                                <li>This single band platform sandals offer a fashion look and comfortable to walk around in all day. Suitable for casual, party, office, dating, evening, dancing, pair with jeans for casual use. Wear with a dress for a night out!</li>
                                <li>True to size, pl choose your normal size, big sizes for wide feet are avaliable.Local warehouse, free exchange.</li>
                            </ul>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Shoes;