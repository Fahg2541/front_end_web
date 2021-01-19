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
                        <div class="product-img text-center">                                <Link to="/womanShoes" class="prod-img">
                            <img src={this.props.img} alt="" width="185" height="150" />
                            </Link>
                            </div>
                            <div class="product-caption text-center" >           
                                <p>{this.props.name}</p>
                                <p>{this.props.priceN}</p>
                                <p>{this.props.price}</p>
                            </div>
                        </div>
                         <p> </p> 
                    </div>
                {/* <div class="col-xl-3 col-lg-3 col-md-9 col-sm-9">
                    <div class="single-new-pro mb-30 text-center">
                        <div class="product-img">
                        <Link to="/shoes"><img src={this.props.img} alt="" width="185" height="150" /></Link>
                        </div>
                        <div class="product-caption">
                            <span>{this.props.name}</span>
                            <span class="text-danger">{this.props.priceN}</span>
                            <p>{this.props.price}</p>
                        </div>
                    </div>
                </div> */}
            </>
        );
    }
}
export default Products;