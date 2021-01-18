import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from '../Pages/Login';

class SiteNavbar extends React.Component {
    render() {
        return (
            <>
                <div class="site-navbar-wrap ">

                    <div class="site-navbar site-navbar-target js-sticky-header">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-6 col-md-6">
                                    <h1 class="my-0 site-logo">
                                        <Link to="/"><img src="assets/image/image/logo2.png" alt="" width="200" height="75" /></Link>
                                    </h1>
                                </div>
                                <div class="col-6 col-md-6">
                                    <nav class="site-navigation text-right" role="navigation">
                                        <div class="container">
                                            <div class="d-inline-block d-lg-block ml-md-0 mr-auto py-3">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                                            <div class="input-group-prepend">
                                                                <button class="btn btn-secondary" type="button" id="button-addon1">Search</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-1">
                                                        <span><Link to="/basket"><img src="assets/image/image/basket.png" alt="" width="40" height="40"></img></Link></span>
                                                    </div>
                                                    
                                                    <div class="col-2">
                                                        {/* <span class="icon-menu h3"></span>  */}
                                                        <span><Link to="/login">Login</Link>|Register</span>
                                                    </div>
                                                </div>


                                            </div>

                                            {/* <ul class="site-menu main-menu js-clone-nav d-none d-lg-none">
                                                <li><Link to="/login">Login</Link></li>
                                                <li><a href="#what-we-do-section" class="nav-link">What We Do</a></li>
                                                <li><a href="#about-section" class="nav-link">About Us</a></li>
                                                <li><a href="#portfolio-section" class="nav-link">Portfolio</a></li>
                                                <li><a href="#studio-section" class="nav-link">Gallery</a></li>
                                                <li><a href="#contact-section" class="nav-link">Contact</a></li>
                                            </ul> */}
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default SiteNavbar;