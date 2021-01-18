import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <>
                <div class="site-mobile-menu site-navbar-target ">
                    <div class="site-mobile-menu-header">
                            <div class="site-mobile-menu-close mt-3">
                                <span class="icon-close2 js-menu-toggle"></span>
                            </div>
                        </div>
                        <div class="site-mobile-menu-body"></div>
                    </div>

                
            </>
        )
    }
}
export default Navbar;