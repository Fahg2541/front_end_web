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
                                        <Link to="/"><img src="assets/image/logo2.png" alt="" width="200" height="65" /></Link>
                                    </h1>
                                </div>
                                <div class="col-6 col-md-6">
                                    <nav class="site-navigation text-right" role="navigation">
                                        <div class="container">
                                            <div class="d-inline-block d-lg-block ml-md-0 mr-auto py-3">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                                                            
                                                            </input>

                                                               <Link to="/search"><button class="btn-s" type="button" id="button-addon1">Search</button></Link> 

                                                        </div>
                                                    </div>
                                                    <div class="col-1">
                                                        <span><Link to="/basket"><img src="assets/image/basket.png" alt="" width="40" height="40"></img></Link></span>
                                                    </div>
                                                    
                                                    
                                                    <div class="col-1">
                                                        <a href="#" class="site-menu-toggle js-menu-toggle text-black">

                                                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                                            <MenuIcon />
                                                        </IconButton> */}
                                                        {/* <span class="icon-menu h3"></span>  */}
                                                        <h4><h5 class="menu-text">Pages</h5></h4>
                                                        {/* <span><Link to="/login">Login</Link>|Register</span> */}
                                                        </a>
                                                    </div>
                                                </div>


                                            </div>

                                            <ul class="site-menu main-menu js-clone-nav d-none d-lg-none">
                                                
                                                <li><Link to="/profile">Profile</Link></li>
                                                <li><Link to="/address">Add Address</Link></li>
                                                <li><Link to="/womanShoes">Woman</Link></li>
                                                <li><Link to="/menShoes">Men</Link></li>
                                                <li><Link to="/status">Status</Link></li>
                                                <li><Link to="/">Logout</Link></li>
                                            </ul>
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