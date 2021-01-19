import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class MenProducts extends React.Component {
    render() {
        return (
            <>
                <div class="col-xl-3 col-lg-3 col-md-8 col-sm-9">
                <div class="product-entry border">
                        <div class="product-img text-center">
                            <Link to="/shoes"><img src={this.props.img} alt="" width="185" height="150" /></Link>
                        </div>
                        <div class="product-caption text-center">
                            <p>{this.props.name}</p>
                            <p>{this.props.price}</p>
                        </div>
                    </div>
                    <p> </p>
                </div>
            </>
        );
    }
}
export default MenProducts;