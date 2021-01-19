import React from 'react';

import WomanProducts from '../Components/WomanProducts';

class WomanShoes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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