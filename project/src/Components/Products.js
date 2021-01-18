import React from 'react';

class Products extends React.Component {
    render() {
        return (
            <>
                <div class="col-xl-3 col-lg-3 col-md-9 col-sm-9">
                    <div class="single-new-pro mb-30 text-center">
                        <div class="product-img">
                            <img src={this.props.img} alt="" width="185" height="150" />
                        </div>
                        <div class="product-caption">
                            <span>{this.props.price}</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Products;