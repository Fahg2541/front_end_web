import React from 'react';

import MenProducts from '../Components/MenProducts';

class WomanShoes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mProducts: [

                {
                    img: "assets/image/image/101.PNG",
                    name:"Homitem Mens Shoes Moccasin Slippers",
                    price: "฿ 1049"
                }
                ,
                {
                    img: "assets/image/image/123.PNG",
                    name:"adidas Men's Lite Racer Adapt Running Shoe",
                    price: "฿ 7000"
                }
                ,
                {
                    img: "assets/image/image/132.PNG",
                    name:"Feethit Mens Slip On Walking Shoes",
                    price: "฿ 1294"
                }
                ,
                {
                    img: "assets/image/image/501.PNG",
                    name:"PUMA Men's Enzo 2 Sneaker",
                    price: "฿ 1924"
                }
                ,
                {
                    img: "assets/image/image/280.PNG",
                    name:"Cole Haan Men's Grand Crosscourt II",
                    price: "฿ 5250"
                },
                {
                    img: "assets/image/image/290.PNG",
                    name:"Nike Jordan Westbrook One Take Basketball Shoes",
                    price: "฿ 6999"
                }
                ,
                {
                    img: "assets/image/image/300.PNG",
                    name:"ECCO Soft 7 Sneaker Men's Long Lace Shoes",
                    price: "฿ 7156"
                }
                ,
                {
                    img: "assets/image/image/350.PNG",
                    name:"Nike Air Jordan Aerospace 720 Mens Basketball",
                    price: "฿ 13999"
                }
            ]
        }
    } 
    render() {
        return (
            <div class="container-fluid">
                <p>Home >> Men</p>
                <div class="row">
                    {
                        this.state.mProducts.map((mp) => (
                        <MenProducts img={mp.img} name={mp.name} price={mp.price}></MenProducts>
                        ))
                    }
                </div>
            </div>
            
        );
    }
}
export default WomanShoes;