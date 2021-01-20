import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Products extends React.Component {
    render() {
        return (
            <>
            <div class="col-xl-3 col-lg-3 col-md-8 col-sm-8">
                    <div class="product-entry border">
                        <div class="product-img text-center">                                
                            <Link to="/shoes" class="prod-img">
                            <img src={this.props.img} alt="" width="185" height="150" />
                            </Link>
                            </div>
                            <div class="product-caption text-center" >           
                                <h7>{this.props.name}</h7>
                                <h6>{this.props.priceN}</h6>
                                <h7>{this.props.price}</h7>
                            </div>
                        </div>
                         <p> </p> 
                    </div>
            </>
        );
    }
}
export default Products;