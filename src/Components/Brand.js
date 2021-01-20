import React from 'react';

class Brand extends React.Component {
    render() {
        return (
            <>
            <div class="row">
                <div class="col-xl-4">
                    {/* <div class="mb-10 text-center"> */}
                    <div class="product-entry border">
                        <div class="product-img text-center">
                            <img src={this.props.img} alt="" width="100" height="50" />
                        </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
            </>
        )
    }
}
export default Brand;