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
            products: [
                {
                    img: "assets/image/01.PNG",
                    name: "Under Armour Men's Charged Assert 8 ",
                    priceN: "sale 20% ฿ 3930",
                    price: "฿ 4912"
                },
                {
                    img: "assets/image/02.PNG",
                    name:"Under Armour Men's HOVR Rise 2",
                    priceN: "sale 20% ฿ 2800",
                    price: "฿ 3500"
                },
                {
                    img: "assets/image/03.PNG",
                    name:"Crocs Unisex-Adult Classic Clog",
                    priceN: "sale 30% ฿ 931",
                    price: "฿ 1330"
                },
                {
                    img: "assets/image/04.PNG",
                    name:"DREAM PAIRS Women's Dolce Fashion",
                    priceN: "sale 25% ฿ 682.50",
                    price: "฿ 910"
                },
                {
                    img: "assets/image/05.PNG",
                    name:"JOY IN LOVE Women's Pumps Shoes",
                    priceN: "sale 10% ฿ 1354",
                    price: "฿ 1504"
                },
                {
                    img: "assets/image/06.PNG",
                    name:"LISHAN Women's Platform Stiletto",
                    priceN: "sale 35% ฿ 1024",
                    price: "฿ 1575"
                },
                {
                    img: "assets/image/07.PNG",
                    name:"Women's Open Toe Platform",
                    priceN: "sale 28% ฿ 882",
                    price: "฿ 1225"
                },
                {
                    img: "assets/image/09.PNG",
                    name:"PUMA Women's Carina Sneaker",
                    priceN: "sale 15% ฿ 3837.75",
                    price: "฿ 4515"
                }
            ],
            wProducts: [
                {
                    img: "assets/image/600.PNG",
                    name:"Breifola Women's Shallow Mouth Fashion",
                    price: "฿ 1644"
                }
                ,
                {
                    img: "assets/image/593.PNG",
                    name:"CHARLES BY CHARLES DAVID Women's Vertrue Pump",
                    price: "฿ 3056"
                }
                ,
                {
                    img: "assets/image/581.PNG",
                    name:"Steve Madden Women's Kimmie Espadrille Wedge Sandal",
                    price: "฿ 2870"
                }
                ,
                {
                    img: "assets/image/540.PNG",
                    name:"Mila Lady Womens Fashion Casual Slip On",
                    price: "฿ 945"
                }
                ,
                {
                    img: "assets/image/550.PNG",
                    name:"FSJ Women Studded Pointed Toe Transparent Pumps High",
                    price: "฿ 1925"
                },
                {
                    img: "assets/image/460.PNG",
                    name:"JENN ARDOR Women's Penny Loafers Slip On ",
                    price: "฿ 1145"
                }
                ,
                {
                    img: "assets/image/362.PNG",
                    name:"Sanfiago Women Memory Foam House Slippers",
                    price: "฿ 699"
                }
                ,
                {
                    img: "assets/image/310.PNG",
                    name:"New Balance Women's Fresh Foam Crag Trail V2 Sneaker",
                    price: "฿ 4809"
                }
                
            ],
            mProducts: [
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

            ]
        }
    }
    render() {
        return (
            <>
                <main>
                        <div class="container-fluid">
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item ">
                                    <img class="d-block w-100" src="assets/image/newyear.jpg" alt="First slide" height="450"/>
                                    </div>
                                    <div class="carousel-item active">
                                    <img class="d-block w-100" src="assets/image/new-year1.jpg" alt="Second slide" height="450"/>
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block w-100" src="assets/image/new-year6.gif" alt="Third slide" height="500"/>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                            <p> </p>

                            <div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                                <h1>New Promotion</h1>
                            </div>
                        <div class="row">
                            {
                                this.state.products.map((p) => (
                                    <Products img={p.img} name={p.name} priceN={p.priceN} price={p.price}></Products>
                                ))
                            }

                        </div>
                        </div>
                        <div class="container-fluid">
                        <div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                        <Link to="/womanShoes"><h2>Woman</h2></Link>
                        </div>
                            <div class="row">
                            {
                                this.state.wProducts.map((wp) => (
                                    <WomanProducts img={wp.img} name={wp.name} price={wp.price}></WomanProducts>
                                ))
                            }
                            </div>
                        </div>
                        <div class="container-fluid">
                        <div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                        <Link to="/menShoes"><h2>Men</h2></Link>
                        </div>
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