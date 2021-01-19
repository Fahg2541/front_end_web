import React from 'react';

import MenProducts from '../Components/MenProducts';

class WomanShoes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mProducts: [
                {
                    img: "assets/image/01.PNG",
                    name: "Under Armour Men's Charged Assert 8 ",
                    price: "฿ 4912"
                },
                {
                    img: "assets/image/02.PNG",
                    name:"Under Armour Men's HOVR Rise 2",
                    price: "฿ 3500"
                },
                {
                    img: "assets/image/101.PNG",
                    name:"Homitem Mens Shoes Moccasin Slippers",
                    price: "฿ 1049"
                }
                ,
                {
                    img: "assets/image/123.PNG",
                    name:"adidas Men's Lite Racer Adapt Running Shoe",
                    price: "฿ 7000"
                }
                ,
                {
                    img: "assets/image/132.PNG",
                    name:"Feethit Mens Slip On Walking Shoes",
                    price: "฿ 1294"
                }
                ,
                {
                    img: "assets/image/501.PNG",
                    name:"PUMA Men's Enzo 2 Sneaker",
                    price: "฿ 1924"
                }
                ,
                {
                    img: "assets/image/280.PNG",
                    name:"Cole Haan Men's Grand Crosscourt II",
                    price: "฿ 5250"
                },
                {
                    img: "assets/image/290.PNG",
                    name:"Nike Jordan Westbrook One Take Basketball Shoes",
                    price: "฿ 6999"
                }
                ,
                {
                    img: "assets/image/300.PNG",
                    name:"ECCO Soft 7 Sneaker Men's Long Lace Shoes",
                    price: "฿ 7156"
                }
                ,
                {
                    img: "assets/image/350.PNG",
                    name:"Nike Air Jordan Aerospace 720 Mens Basketball",
                    price: "฿ 13999"
                }
                ,
                {
                    img: "assets/image/212.PNG",
                    name:"New Balance Men's Fresh Foam Vongo V4 Running Shoe",
                    price: "฿ 8505"
                }
                ,
                {
                    img: "assets/image/473.PNG",
                    name:"Nike Men's Flex Control Tr4 Cross Trainer",
                    price: "฿ 8365"
                }
                ,
                {
                    img: "assets/image/481.PNG",
                    name:"Jordan Air 6 Quai 54 - Purple Mens Cz4152",
                    price: "฿ 13650"
                }
                ,
                {
                    img: "assets/image/563.PNG",
                    name:"Feethit Mens Slip On Walking Shoes Lightweight",
                    price: "฿ 979"
                }
                ,
                {
                    img: "assets/image/490.PNG",
                    name:"Fila Men's V94m Sneaker",
                    price: "฿ 1518"
                }
                ,
                {
                    img: "assets/image/510.PNG",
                    name:"PEAK Mens Comfortable Lightweight Running Shoes ",
                    price: "฿ 2450"
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