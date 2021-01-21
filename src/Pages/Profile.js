import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component{       
    render() {
        return (
                <div class="container-fluid">
                    <p>Home >> Profile</p>
                    <div class="container">
                        {/* <div class="main-body"></div> */}
                            <div class="row gutters-sm">
                                <div class="col-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex flex-column align-items-center text-center">
                                            <img class="img-fluid w-76" src="assets/image/profile01.jpg" alt=""></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                            <div class="col-8">
                                <label for="username">Username : </label>
                                <input type="text" class="form-control" id="name" value="Mejilla"></input>
                                <label for="name">Name : </label>
                                <input type="text" class="form-control" id="name" value="Mejilla Kayden"></input>
                                <label for="email">Email : </label>
                                <input type="text" class="form-control" id="name" value="mejilla@hotmail.com"></input>
                                <label for="phone">Phone : </label>
                                <input type="text" class="form-control" id="name" value="(+66) 968669542"></input>
                                <label for="gender">Gender : </label>&nbsp;&nbsp;
                                <input type="radio" id="male" name="gender" value="male"></input>
                                <label for="male">&nbsp;Male</label>&nbsp;&nbsp;
                                <input type="radio" id="female" name="gender" value="female"></input>
                                <label for="female">&nbsp;Female</label>&nbsp;&nbsp;
                                <input type="radio" id="other" name="gender" value="other"></input>
                                <label for="other"> &nbsp;Other</label><br></br>
                                <label for="address">Address : </label>
                                <input type="text" class="form-control" id="name" value="15/215 Ratanakosin Road Soi 15, Bangrin, Mueng Ranong, Ranong 85000"></input>
                                <h5> </h5>
                                <input type="text" class="form-control" id="name" value="248/136 Makham Tia, Mueang Surat Thani District, Surat Thani 84000"></input>

                                <p> </p>
                            </div>
                        </div>
                        <div class="col-12 text-center">
                            <button class="btn-v">Save</button>&nbsp;&nbsp;
                            <Link to="/address"><button class="btn-v">Add Address</button></Link>
                            
                        </div>
                </div>
            </div>
                    
        );
    }
}
export default Profile;

