import React from 'react';
import BlackProducts from '../Components/BlackProduct';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Products: [
                {
                    img: "assets/image/01.PNG",
                    name:"Under Armour Men's Charged Assert 8 ",
                    price: "฿ 4912"
                }
                ,
                {
                    img: "assets/image/061.PNG",
                    name:"LISHAN Women's Platform Stiletto Toe ",
                    price: "฿ 1575"
                }
                ,
                {
                    img: "assets/image/091.PNG",
                    name:"PUMA Women's Carina Sneaker",
                    price: "฿ 4515"
                }
                ,
                {
                    img: "assets/image/103.PNG",
                    name:" Homitem Mens Shoes Moccasin Slippers Anti-Slip House Slipper",
                    price: "฿ 1049"
                }
                ,
                {
                    img: "assets/image/121.PNG",
                    name:" adidas Men's Lite Racer Adapt Running Shoe",
                    price: "฿ 7000"
                }

                ,
                {
                    img: "assets/image/221.PNG",
                    name:" Heelys Kids' Racer 20 Wheeled Heel Shoe",
                    price: "฿ 4165"
                }
                ,
                {
                    img: "assets/image/280.PNG",
                    name:" Cole Haan Men's Grand Crosscourt II Sneakers Shoes",
                    price: "฿ 5250"
                }
                ,
                {
                    img: "assets/image/543.PNG",
                    name:" Mila Lady Womens Fashion Casual Slip On",
                    price: "฿ 945"
                }
                ,
                {
                    img: "assets/image/301.PNG",
                    name:" ECCO Soft 7 Sneaker Men's Long Lace Shoes",
                    price: "฿ 7156"
                }
                ,
                {
                    img: "assets/image/322.PNG",
                    name:" New Balance Women's 202 V1 Slide Sandal",
                    price: "฿ 1999"
                }
                ,
                {
                    img: "assets/image/340.PNG",
                    name:" TIEM Slipstream - Indoor Cycling Shoe, SPD Compatible - Women's",
                    price: "฿ 4450"
                }
                ,
                {
                    img: "assets/image/351.PNG",
                    name:" Nike Air Jordan Aerospace 720 Mens Basketball Trainers Bv5502 Sneakers Shoes",
                    price: "฿ 13999"
                }

            ]
        }
    }

    render() {
        return (

            <div class="container-fluid">
                <p>Search >> Black</p>
                <div class="row">
                    {
                        this.state.Products.map((p) => (
                        <BlackProducts img={p.img} name={p.name} price={p.price}></BlackProducts>
                        ))
                    }
                </div>
            </div>

        );
    }
}
export default Search;