import React from 'react';

class Promotion extends React.Component {
    render() {
        return (
            <>
                <div class="col-xl-4 col-lg-3 col-md-1 col-sm-1">
                    <div class="single-new-pro mb-30 text-center">
                        <div class="product-img">
                            <img src={this.props.img} alt="" width="300" height="150" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Promotion;