import React from 'react';

class Address extends React.Component{
    render() {
        return (
            <div class="container-fluid">
                <p>Home >> Address</p>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Name:</label>
                        <input type="text" class="form-control border border-dark"  aria-label="name"/>
                    </div>
                    <div class="col-md-6">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Phone:</label>
                        <input type="text" class="form-control border border-dark"  aria-label="phone" placeholder="(+66)"/>
                    </div>
                    <div class="col-md-6">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">House No:</label>
                        <input type="text" class="form-control border border-dark"  aria-label="house no"/>
                    </div>
                    <div class="col-md-6">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Village No:</label>
                        <input type="text" class="form-control border border-dark"  aria-label="village no"/>
                    </div>
                    <div class="col-md-6">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Building:</label>
                        <input type="text" class="form-control border border-dark"  aria-label="building"/>
                    </div>
                    <div class="col-md-6">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Floor:</label>
                        <input type="text" class="form-control border border-dark"  aria-label="floor" />
                    </div>
                    <div class="col-md-6">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Roud:</label>
                        <input type="text" class="form-control border border-dark"  aria-label="roud"/>
                    </div>
                    <div class="col-md-6">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Lane:</label>
                        <input type="text" class="form-control border border-dark"  aria-label="lane"/>
                    </div>
                    <div class="col-md-6">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Sub-district:</label>
                        <input type="text" class="form-control border border-dark"  aria-label="sub-district"/>
                    </div>
                    <div class="col-md-6">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">District:</label>
                        <input type="text" class="form-control border border-dark"  aria-label="district"/>
                    </div>
                    <div class="col-md-6">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Province:</label>
                        <input type="text" class="form-control border border-dark"  aria-label="province"/>
                    </div>
                    <div class="col-md-6">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Postal Code:</label>
                        <input type="text" class="form-control border border-dark"  aria-label="postal code"/>
                    </div>
                </div>
                <hr></hr>
                <div class="col-12 text-center" >
                  <button type="submit" class="btn-v">Submit</button>
                </div>

            </div>
        );
    }
}
export default Address;

