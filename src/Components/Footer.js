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
			<div class="container">
				<div class="row">
					<div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
						<h3>Trusted Partners</h3>
					</div>
				</div>
				<div class="row">
                    {
                        this.state.brand.map((b) => (
                            <Brand img = {b.img}></Brand>
                        ))
                    }
				
				</div>
			</div>
		</div>
        )
    }

}

export default Footer;