import React from 'react';
import Brand from './Brand';

class Footer extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            brand: [
                {
                    img: "assets/image/brand-1.jpg"
                }
                ,
                {
                    img: "assets/image/brand-2.jpg"
                }
                ,
                {
                    img: "assets/image/brand-3.jpg"
                }
                ,
                {
                    img: "assets/image/brand-4.jpg"
                }
                ,
                {
                    img: "assets/image/brand-5.jpg"
                }
                ,
                {
                    img: "assets/image/brand-6.png"
                }
                ,
                {
                    img: "assets/image/brand-7.jpg"
                }
                ,
                {
                    img: "assets/image/brand-8.jpg"
                }
                ,
                {
                    img: "assets/image/brand-9.png"
                }
                ,
                {
                    img: "assets/image/brand-10.jpg"
                }
                ,
                {
                    img: "assets/image/brand-13.png"
                }
            ]
        }
    }

    render(){
        return(

            <div class="colorlib-partner">
                <div class="card-body text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                                <p> </p>
                                <h4>Trusted Partners</h4>
                            </div>
                        </div>
                        {/* <div class="product-entry border bg-white"> */}
                            <div class="row">
                                {
                                    this.state.brand.map((b) => (
                                        <Brand img = {b.img}></Brand>
                                    ))
                                }
                            </div>
                        {/* </div> */}
                    </div><p> </p>
				    <h7>Copyright &copy;<script>document.write(new Date().getFullYear());</script>Group1.All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank"></a>Colorlib</h7>
			    </div>
            </div>
        )
    }

}

export default Footer;