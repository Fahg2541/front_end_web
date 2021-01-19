import React from 'react';

import WomanProducts from '../Components/WomanProducts';

class WomanShoes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wProducts: [
                {
                    img: "assets/image/03.PNG",
                    name:"Crocs Unisex-Adult Classic Clog",
                    price: "฿ 1330"
                },
                {
                    img: "assets/image/04.PNG",
                    name:"DREAM PAIRS Women's Dolce Fashion",
                    price: "฿ 910"
                },
                {
                    img: "assets/image/05.PNG",
                    name:"JOY IN LOVE Women's Pumps Shoes",
                    price: "฿ 1504"
                },
                {
                    img: "assets/image/06.PNG",
                    name:"LISHAN Women's Platform Stiletto",
                    price: "฿ 1575"
                },
                {
                    img: "assets/image/07.PNG",
                    name:"Women's Open Toe Platform",
                    price: "฿ 1225"
                },
                {
                    img: "assets/image/09.PNG",
                    name:"PUMA Women's Carina Sneaker",
                    price: "฿ 4515"
                },
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
                ,
                {
                    img: "assets/image/081.PNG",
                    name:"COLETER Women's Closed Pointed Toe Low ",
                    price: "฿ 1575"
                }
                ,
                {
                    img: "assets/image/112.PNG",
                    name:"DREAM PAIRS Women's Fiona Fashion",
                    price: "฿ 1084"
                }
                ,
                {
                    img: "assets/image/152.PNG",
                    name:"LAMHER Women’s Thong Flip Flops Sandal",
                    price: "฿ 699"
                }
                ,
                {
                    img: "assets/image/160.PNG",
                    name:"Hotmarzz Women's Slim Flip Flops Concave ",
                    price: "฿ 559"
                }
                ,
                {
                    img: "assets/image/391.PNG",
                    name:"Ataiwee Women's Wide Width Flat Shoes",
                    price: "฿ 1224"
                }
                ,
                {
                    img: "assets/image/192.PNG",
                    name:"SANDALUP Thong Flat Sandals ",
                    price: "฿ 594"
                }
            ]
        }
    } 
    render() {
        return (
            <div class="container-fluid">
                <p>Home >> Woman</p>
                <div class="row">
                    {
                        this.state.wProducts.map((wp) => (
                        <WomanProducts img={wp.img} name={wp.name} price={wp.price}></WomanProducts>
                        ))
                    }
                </div>
            </div>
            
        );
    }
}
export default WomanShoes;