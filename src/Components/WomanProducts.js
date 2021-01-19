import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class WomanProducts extends React.Component {
    render() {
        return (
            <>
                <div class="col-xl-3 col-lg-4 col-md-8 col-sm-8">
                    <div class="single-new-pro mb-30 text-center">
                        <div class="product-img">
                        <Link to="/shoes"><img src={this.props.img} alt="" width="185" height="150" /></Link>
                        </div>
                        <div class="product-caption">
                            <span>{this.props.name}</span>
                            <span>{this.props.price}</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default WomanProducts;