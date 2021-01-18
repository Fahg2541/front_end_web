import React from 'react';

class Promotion extends React.Component {
    render() {
        return (
            <>
                <div class="col-xl-3 col-lg-3 col-md-7 col-sm-7">
                    <div class="single-new-pro mb-30 text-center">
                        <div class="product-img">
                            <img src={this.props.img} alt="" width="200" height="100" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Promotion;