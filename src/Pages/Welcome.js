import React from 'react';
import Products from '../Components/Products';
import Promotion from '../Components/Promotion';
import WomanProducts from '../Components/WomanProducts';
import MenProducts from '../Components/MenProducts';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Welcome extends React.Component {

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
                } 
                // ,{
                //     img: "assets/image/image/new-year4.jpg"
                // }
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
            ],
            wProducts: [

                {
                    img: "assets/image/image/600.PNG",
                    name:"Breifola Women's Shallow Mouth Fashion",
                    price: "฿ 1644"
                }
                ,
                {
                    img: "assets/image/image/593.PNG",
                    name:"CHARLES BY CHARLES DAVID Women's Vertrue Pump",
                    price: "฿ 3056"
                }
                ,
                {
                    img: "assets/image/image/581.PNG",
                    name:"Steve Madden Women's Kimmie Espadrille Wedge Sandal",
                    price: "฿ 2870"
                }
                ,
                {
                    img: "assets/image/image/540.PNG",
                    name:"Mila Lady Womens Fashion Casual Slip On",
                    price: "฿ 945"
                }
                ,
                {
                    img: "assets/image/image/550.PNG",
                    name:"FSJ Women Studded Pointed Toe Transparent Pumps High",
                    price: "฿ 1925"
                },
                {
                    img: "assets/image/image/460.PNG",
                    name:"JENN ARDOR Women's Penny Loafers Slip On ",
                    price: "฿ 1145"
                }
                ,
                {
                    img: "assets/image/image/362.PNG",
                    name:"Sanfiago Women Memory Foam House Slippers",
                    price: "฿ 699"
                }
                ,
                {
                    img: "assets/image/image/310.PNG",
                    name:"New Balance Women's Fresh Foam Crag Trail V2 Sneaker",
                    price: "฿ 4809"
                }

            ],
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
            <>
                <main>
                        <div class="container">
                            <div class="row">
                                {
                                    this.state.promotion.map((po) => (
                                        <Promotion img={po.img}></Promotion>
                                    ))
                                }
                            </div>
                        </div>
                        <div class="row">
                            {
                                this.state.products.map((p) => (
                                    <Products img={p.img} name={p.name} priceN={p.priceN} price={p.price}></Products>
                                ))
                            }

                        </div>
                        <div class="container-fluid">
                        <Link to="/womanShoes"><h2>|Woman</h2></Link>
                            <div class="row">
                            {
                                this.state.wProducts.map((wp) => (
                                    <WomanProducts img={wp.img} name={wp.name} price={wp.price}></WomanProducts>
                                ))
                            }
                            </div>
                        </div>
                        <div class="container-fluid">
                        <Link to="/menShoes"><h2>|Men</h2></Link>
                            <div class="row">
                            {
                                this.state.mProducts.map((mp) => (
                                    <MenProducts img={mp.img} name={mp.name} price={mp.price}></MenProducts>
                                ))
                            }
                            </div>
                        </div>

                </main>
            </>
        )
    }
}
export default Welcome;