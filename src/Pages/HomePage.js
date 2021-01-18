import React from 'react';
import Products from '../Components/Products';
import Promotion from '../Components/Promotion';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            promotion: [
                {
                    img: "assets/image/image/new-year1.jpg"
                },
                {
                    img: "assets/image/image/new-year2.jpg"
                },
                {
                    img: "assets/image/image/newyear.jpg"
                }, 
                {
                    img: "assets/image/image/new-year4.jpg"
                }
            ],
            products: [
                {
                    img: "assets/image/image/01.PNG",
                    name: "Under Armour Men's Charged Assert 8 ",
                    priceN: "20% ฿ 3930",
                    price: "฿ 4912"
                },
                {
                    img: "assets/image/image/02.PNG",
                    name:"Under Armour Men's HOVR Rise 2",
                    priceN: "20% ฿ 2800",
                    price: "฿ 3500"
                },
                {
                    img: "assets/image/image/03.PNG",
                    name:"Crocs Unisex-Adult Classic Clog",
                    priceN: "30% ฿ 931",
                    price: "฿ 1330"
                },
                {
                    img: "assets/image/image/04.PNG",
                    name:"DREAM PAIRS Women's Dolce Fashion",
                    priceN: "25% ฿ 682.50",
                    price: "฿ 910"
                },
                {
                    img: "assets/image/image/05.PNG",
                    name:"JOY IN LOVE Women's Pumps Shoes",
                    priceN: "10% ฿ 1354",
                    price: "฿ 1504"
                },
                {
                    img: "assets/image/image/06.PNG",
                    name:"LISHAN Women's Platform Stiletto",
                    priceN: "35% ฿ 1024",
                    price: "฿ 1575"
                },
                {
                    img: "assets/image/image/07.PNG",
                    name:"Women's Open Toe Platform",
                    priceN: "28% ฿ 882",
                    price: "฿ 1225"
                },
                {
                    img: "assets/image/image/09.PNG",
                    name:"PUMA Women's Carina Sneaker",
                    priceN: "15% ฿ 3837.75",
                    price: "฿ 4515"
                }
            ]
        }
    }
    render() {
        return (
            <>
                <main >
                    <div class="container ">
                        <div class="row site-blocks-cover">
                            {
                                this.state.promotion.map((po) => (
                                    <Promotion img={po.img}></Promotion>
                                ))
                            }
                        </div>
                    </div>
                    <div class="row" >
                        {
                            this.state.products.map((p) => (
                                <Products img={p.img} name={p.name} priceN={p.priceN} price={p.price}></Products>
                            ))
                        }

                    </div>
                    
                </main>
            </>
        )
    }
}
export default HomePage;